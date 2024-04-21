import { createZodDto } from '@anatine/zod-nestjs'
import { z } from 'zod'

export const loginResponseSchema = z.object({
  session: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
})

export class LoginResponse extends createZodDto(loginResponseSchema) {}
