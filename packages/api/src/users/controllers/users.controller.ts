import { ZodValidationPipe } from '@anatine/zod-nestjs'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
  UsePipes,
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import express from 'express'
import { AuthGuard } from 'src/auth/guards/auth.guard'
import { SessionService } from 'src/auth/services/session.service'
import { UserGetResponse } from 'src/server/dto/responses/user-get-response.dto'
import { UserListResponse } from 'src/server/dto/responses/user-list-response.dto'
import { UserSessionListResponse } from 'src/server/dto/responses/user-session-list-response.dto'
import { UserService } from 'src/users/services/users.service'

import { transformUserToDTO } from '../dto/transforms/user.transforms'
import { UserCreateInputDTO } from '../dto/user-create-input.dto'
import { UserUpdateInputDTO } from '../dto/user-update-input.dto'
import { UsersListQueryParamsDTO } from '../dto/users-list-query-params.dto'

@Controller('/api/v1/server/users')
@ApiTags('Users')
@UsePipes(ZodValidationPipe)
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  /**
   * Create a user.
   */
  @Post()
  async createUser(
    @Req() req: express.Request,
    @Body() body: UserCreateInputDTO,
  ): Promise<UserGetResponse> {
    if (!req.user) {
      throw new UnauthorizedException()
    }
    const user = await this.userService.createUserAsAdmin(req.user, body)

    return {
      user: transformUserToDTO(user),
    }
  }

  /**
   * Update a user.
   */
  @Patch('/:userId')
  async updateUser(
    @Req() req: express.Request,
    @Body() body: UserUpdateInputDTO,
    @Param('userId') userId: string,
  ): Promise<UserGetResponse> {
    if (!req.user) {
      throw new UnauthorizedException()
    }

    const user = await this.userService.updateUserAsAdmin(req.user, {
      userId,
      updatePayload: body,
    })

    return {
      user: transformUserToDTO(user),
    }
  }

  /**
   * List the users.
   */
  @Get()
  async listUsers(
    @Req() req: express.Request,
    @Query() queryParams: UsersListQueryParamsDTO,
  ): Promise<UserListResponse> {
    if (!req.user) {
      throw new UnauthorizedException()
    }
    const { results, totalCount } = await this.userService.listUsersAsAdmin(
      req.user,
      { ...queryParams },
    )
    return {
      result: results.map((user) => transformUserToDTO(user)),
      meta: { totalCount },
    }
  }

  /**
   * Get a user by id.
   */
  @Get('/:userId')
  async getUser(
    @Req() req: express.Request,
    @Param('userId') userId: string,
  ): Promise<UserGetResponse> {
    if (!req.user) {
      throw new UnauthorizedException()
    }
    const user = await this.userService.getUserByIdAsAdmin(req.user, userId)
    return { user: transformUserToDTO(user) }
  }

  /**
   * Delete a server user by id.
   */
  @Delete('/:userId')
  async deleteUser(
    @Req() req: express.Request,
    @Param('userId') userId: string,
  ): Promise<void> {
    if (!req.user) {
      throw new UnauthorizedException()
    }
    await this.userService.deleteUserAsAdmin(req.user, userId)
  }

  @Get(':userId/sessions')
  async listActiveUserSessions(
    @Req() req: express.Request,
    @Param('userId') userId: string,
  ): Promise<UserSessionListResponse> {
    if (!req.user) {
      throw new UnauthorizedException()
    }
    const user = await this.userService.getUserByIdAsAdmin(req.user, userId)
    const sessions = await this.sessionService.listActiveUserSessions(user)
    return {
      result: sessions,
      meta: { totalCount: sessions.length },
    }
  }
}
