import {
  ConflictException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common'
import { addMs, earliest } from '@stellariscloud/utils'
import { eq, or } from 'drizzle-orm'
import { JWTService } from 'src/auth/services/jwt.service'
import { OrmService } from 'src/orm/orm.service'
import { SIGNUP_ENABLED_CONFIG } from 'src/server/constants/server.constants'
import { serverSettingsTable } from 'src/server/entities/server-configuration.entity'
import type { NewUser, User } from 'src/users/entities/user.entity'
import { usersTable } from 'src/users/entities/user.entity'
import { v4 as uuidV4 } from 'uuid'

import { AuthDurationMilliseconds } from '../constants/duration.constants'
import type { LoginCredentialsDTO } from '../dto/login-credentials.dto'
import type { SignupCredentialsDTO } from '../dto/signup-credentials.dto'
import type { Session } from '../entities/session.entity'
import { LoginInvalidException } from '../exceptions/login-invalid.exception'
import { SessionInvalidException } from '../exceptions/session-invalid.exception'
import { authHelper } from '../utils/auth-helper'
import { SessionService } from './session.service'

/**
 * Calculates the sliding expiration of a session token based on the initial
 * creation timestamp.
 */
export const sessionExpiresAt = (createdAt: Date) =>
  earliest(
    addMs(new Date(), AuthDurationMilliseconds.SessionSliding),
    addMs(createdAt, AuthDurationMilliseconds.SessionAbsolute),
  )

@Injectable()
export class AuthService {
  sessionService: SessionService

  constructor(
    private readonly jwtService: JWTService,
    private readonly ormService: OrmService,
    @Inject(forwardRef(() => SessionService)) _sessionService,
  ) {
    this.sessionService = _sessionService as SessionService
  }

  async signup(data: SignupCredentialsDTO) {
    const signupEnabled =
      await this.ormService.db.query.serverSettingsTable.findFirst({
        where: eq(serverSettingsTable.key, SIGNUP_ENABLED_CONFIG.key),
      })

    if (signupEnabled?.value === false) {
      throw new ForbiddenException('Signups are not enabled.')
    }

    const user = await this.createSignup(data)
    // await this.sendEmailVerification(data.email)

    return user
  }

  async createSignup(data: SignupCredentialsDTO) {
    const { username, email } = data

    const existingByEmail = email
      ? await this.ormService.db.query.usersTable.findFirst({
          where: eq(usersTable.email, email),
        })
      : false

    if (email && existingByEmail) {
      throw new ConflictException(`User already exists with email "${email}".`)
    }

    const existingByUsername =
      await this.ormService.db.query.usersTable.findFirst({
        where: eq(usersTable.username, username),
      })

    if (existingByUsername) {
      throw new ConflictException(
        `User already exists with username "${username}".`,
      )
    }

    const now = new Date()
    const passwordSalt = authHelper.createPasswordSalt()
    const newUser: NewUser = {
      id: uuidV4(),
      email: data.email,
      isAdmin: false,
      emailVerified: false,
      username: data.username,
      passwordHash: authHelper
        .createPasswordHash(data.password, passwordSalt)
        .toString('hex'),
      passwordSalt,
      permissions: [],
      createdAt: now,
      updatedAt: now,
    }

    const [createdUser] = await this.ormService.db
      .insert(usersTable)
      .values(newUser)
      .returning()

    return createdUser
  }

  async login({ login, password }: LoginCredentialsDTO) {
    const user = await this.ormService.db.query.usersTable.findFirst({
      where: or(eq(usersTable.email, login), eq(usersTable.username, login)),
    })
    const passwordVerificationSuccess =
      user && this.verifyPassword(user, password)

    if (!passwordVerificationSuccess) {
      throw new LoginInvalidException()
    }

    const { session, accessToken, refreshToken } =
      await this.sessionService.createSession(user)

    return {
      user,
      accessToken,
      refreshToken,
      expiresAt: session.expiresAt,
    }
  }

  verifyPassword(user: User, password: string) {
    if (!user.passwordHash || !password) {
      return false
    }

    return (
      authHelper
        .createPasswordHash(password, user.passwordSalt)
        .compare(Buffer.from(user.passwordHash, 'hex')) === 0
    )
  }

  async extendSessionWithRefreshToken(refreshToken: string): Promise<{
    user: User
    session: Session
    accessToken: string
    refreshToken: string
  }> {
    const session =
      await this.sessionService.verifySessionWithRefreshToken(refreshToken)

    const user = await this.ormService.db.query.usersTable.findFirst({
      where: eq(usersTable.id, session.userId),
    })

    if (!user) {
      throw new SessionInvalidException()
    }

    const updated = await this.sessionService.extendSession(session)

    return {
      user,
      session: updated.session,
      accessToken: updated.accessToken,
      refreshToken: updated.refreshToken,
    }
  }
}
