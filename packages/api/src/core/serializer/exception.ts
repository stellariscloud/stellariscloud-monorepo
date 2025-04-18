import {
  BadRequestException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common'
import type { ZodError } from 'zod'

export class ZodValidationException extends BadRequestException {
  constructor(private readonly error: ZodError) {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Validation failed',
      errors: error.errors,
    })
  }

  public getZodError() {
    return this.error
  }
}

export class ZodSerializationException extends InternalServerErrorException {
  constructor(private readonly error: ZodError) {
    super()
  }

  public getZodError() {
    return this.error
  }
}

export type ZodExceptionCreator = (error: ZodError) => Error

export const createZodValidationException: ZodExceptionCreator = (error) => {
  return new ZodValidationException(error)
}

export const createZodSerializationException: ZodExceptionCreator = (error) => {
  return new ZodSerializationException(error)
}
