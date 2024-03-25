import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppModule } from 'src/app/app.module'
import { coreConfig } from 'src/core/config'

import { authConfig } from './config'
import { AuthController } from './controllers/auth.controller'
import { AuthService } from './services/auth.service'
import { JWTService } from './services/jwt.service'
import { SessionService } from './services/session.service'

@Global()
@Module({
  imports: [
    ConfigModule.forFeature(authConfig),
    ConfigModule.forFeature(coreConfig),
    AppModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JWTService, SessionService],
  exports: [AuthService, JWTService, SessionService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthModule {}
