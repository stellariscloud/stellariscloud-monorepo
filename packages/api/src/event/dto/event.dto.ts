import { createZodDto } from '@anatine/zod-nestjs'
import { z } from 'zod'

export const eventSchema = z.object({
  id: z.string(),
  eventKey: z.string(),
  emitterIdentifier: z.string(),
  locationContext: z
    .object({
      folderId: z.string(),
      objectKey: z.string().optional(),
    })
    .optional(),
  data: z.any(),
  createdAt: z.date(),
})

export class EventDTO extends createZodDto(eventSchema) {}
