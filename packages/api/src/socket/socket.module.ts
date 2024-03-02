import { forwardRef, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppModule } from 'src/app/app.module'
import { AppService } from 'src/app/services/app.service'
import { AuthModule } from 'src/auth/auth.module'
import { authConfig } from 'src/auth/config'
import { JWTService } from 'src/auth/services/jwt.service'
import { redisConfig } from 'src/cache/redis.config'
import { RedisService } from 'src/cache/redis.service'
import { coreConfig } from 'src/core/config'
import { FoldersModule } from 'src/folders/folders.module'
import { FolderService } from 'src/folders/services/folder.service'
import { S3Module } from 'src/s3/s3.module'
import { ServerModule } from 'src/server/server.module'
import { ServerConfigurationService } from 'src/server/services/server-configuration.service'

import { SocketService } from './socket.service'

@Module({
  controllers: [],
  imports: [
    forwardRef(() => FoldersModule),
    forwardRef(() => AppModule),
    AuthModule,
    ServerModule,
    S3Module,
    ConfigModule.forFeature(redisConfig),
    ConfigModule.forFeature(authConfig),
    ConfigModule.forFeature(coreConfig),
  ],
  providers: [
    JWTService,
    SocketService,
    FolderService,
    AppService,
    RedisService,
    ServerConfigurationService,
  ],
  exports: [SocketService, RedisService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SocketModule {}
