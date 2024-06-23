import { Injectable } from '@nestjs/common'
import { eq, sql } from 'drizzle-orm'
import { authHelper } from 'src/auth/utils/auth-helper'
import { parseSort } from 'src/core/utils/sort.util'
import { OrmService } from 'src/orm/orm.service'
import { v4 as uuidV4 } from 'uuid'

import type { CreateUserDTO } from '../dto/create-user.dto'
import type { UpdateUserDTO } from '../dto/update-user.dto'
import type { NewUser, User } from '../entities/user.entity'
import { usersTable } from '../entities/user.entity'
import { UserNotFoundException } from '../exceptions/user-not-found.exception'

export enum UserSort {
  CreatedAtAsc = 'createdAt-asc',
  CreatedAtDesc = 'createdAt-desc',
  EmailAsc = 'email-asc',
  EmailDesc = 'email-desc',
  NameAsc = 'name-asc',
  NameDesc = 'name-desc',
  RoleAsc = 'role-asc',
  RoleDesc = 'role-desc',
  StatusAsc = 'status-asc',
  StatusDesc = 'status-desc',
  UpdatedAtAsc = 'updatedAt-asc',
  UpdatedAtDesc = 'updatedAt-desc',
}

@Injectable()
export class UserService {
  constructor(private readonly ormService: OrmService) {}

  async updateViewer(actor: User, { name }: { name: string }) {
    const updatedUser = (
      await this.ormService.db
        .update(usersTable)
        .set({
          name,
        })
        .where(eq(usersTable.id, actor.id))
        .returning()
    )[0]

    return updatedUser
  }

  async getByEmail({ email }: { email: string }) {
    const user = await this.ormService.db.query.usersTable.findFirst({
      where: eq(usersTable.email, email),
    })

    if (!user) {
      throw new UserNotFoundException()
    }

    return user
  }

  async getById({ id }: { id: string }) {
    const user = await this.ormService.db.query.usersTable.findFirst({
      where: eq(usersTable.id, id),
    })

    if (!user) {
      throw new UserNotFoundException()
    }

    return user
  }

  async listUsers({
    limit = 10,
    offset = 0,
    sort = UserSort.CreatedAtDesc,
    isAdmin,
  }: {
    limit?: number
    offset?: number
    sort?: UserSort
    isAdmin?: boolean
  }) {
    const where = isAdmin ? eq(usersTable.isAdmin, isAdmin) : undefined

    const users = await this.ormService.db.query.usersTable.findMany({
      where,
      limit,
      offset,
      orderBy: parseSort(usersTable, sort),
    })
    const [userCountResult] = await this.ormService.db
      .select({ count: sql<string | null>`count(*)` })
      .from(usersTable)
      .where(where)

    return {
      results: users,
      totalCount: parseInt(userCountResult.count ?? '0', 10),
    }
  }

  listUsersAsAdmin(
    actorId: string,
    {
      limit = 10,
      offset = 0,
      sort = UserSort.CreatedAtDesc,
      isAdmin,
    }: {
      limit?: number
      offset?: number
      sort?: UserSort
      isAdmin?: boolean
    },
  ) {
    // TODO: ACL
    return this.listUsers({ limit, offset, sort, isAdmin })
  }

  getUserByIdAsAdmin(actorId: string, userId: string) {
    // TODO: ACL
    return this.getById({ id: userId })
  }

  async createUserAsAdmin(actor: User, userPayload: CreateUserDTO) {
    // TODO: ACL
    // TODO: input validation

    const now = new Date()

    const passwordSalt = authHelper.createPasswordSalt()
    const newUser: NewUser = {
      id: uuidV4(),
      name: userPayload.name,
      email: userPayload.email,
      isAdmin: userPayload.isAdmin,
      emailVerified: userPayload.emailVerified ?? false,
      username: userPayload.username,
      passwordHash: authHelper
        .createPasswordHash(userPayload.password, passwordSalt)
        .toString('hex'),
      passwordSalt,
      permissions: userPayload.permissions ?? [],
      createdAt: now,
      updatedAt: now,
    }

    const [createdUser] = await this.ormService.db
      .insert(usersTable)
      .values(newUser)
      .returning()

    return createdUser
  }

  async updateUserAsAdmin(
    actor: User,
    userPayload: UpdateUserDTO & { id: string },
  ) {
    // TODO: ACL
    // TODO: input validation

    const existingUser = await this.ormService.db.query.usersTable.findFirst({
      where: eq(usersTable.id, userPayload.id),
    })

    if (!existingUser) {
      throw new UserNotFoundException()
    }

    const updates: {
      isAdmin?: boolean
      name?: string
      emailVerified?: boolean
      passwordHash?: string
      passwordSalt?: string
      permissions?: string[]
    } = {}

    if (userPayload.isAdmin && !existingUser.isAdmin) {
      updates.isAdmin = true
    } else if (!userPayload.isAdmin && existingUser.isAdmin) {
      updates.isAdmin = false
    }

    if (userPayload.name) {
      updates.name = userPayload.name
    }

    if (
      (userPayload.emailVerified === false ||
        userPayload.emailVerified === true) &&
      userPayload.emailVerified !== existingUser.emailVerified
    ) {
      updates.emailVerified = userPayload.emailVerified
    }

    if (userPayload.password) {
      const passwordSalt = authHelper.createPasswordSalt()
      updates.passwordHash = authHelper
        .createPasswordHash(userPayload.password, passwordSalt)
        .toString('hex')
      updates.passwordSalt = passwordSalt
    }
    if (userPayload.permissions) {
      // TODO: validate incoming permission keys
      updates.permissions = userPayload.permissions
    }

    const updatedUser = (
      await this.ormService.db
        .update(usersTable)
        .set(updates)
        .where(eq(usersTable.id, existingUser.id))
        .returning()
    )[0]

    return updatedUser
  }

  async deleteUserAsAdmin(actor: User, userId: string) {
    // TODO: ACL
    await this.ormService.db.delete(usersTable).where(eq(usersTable.id, userId))
  }
}
