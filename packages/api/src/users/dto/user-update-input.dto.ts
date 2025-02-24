import { createZodDto } from '@anatine/zod-nestjs'
import { z } from 'zod'

export const userUpdateInputSchema = z.object({
  name: z.union([z.string().min(1), z.null()]).optional(),
  email: z.union([z.string().email(), z.null()]).optional(),
  isAdmin: z.boolean().optional(),
  username: z.string().min(2).optional(),
  password: z.string().min(1).optional(),
  permissions: z.array(z.string()).optional(),
})

export class UserUpdateInputDTO extends createZodDto(userUpdateInputSchema) {}
