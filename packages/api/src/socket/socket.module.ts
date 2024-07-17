import { forwardRef, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppModule } from 'src/app/app.module'
import { appConfig } from 'src/app/config'
import { AppService } from 'src/app/services/app.service'
import { AuthModule } from 'src/auth/auth.module'
import { authConfig } from 'src/auth/config'
import { JWTService } from 'src/auth/services/jwt.service'
import { redisConfig } from 'src/cache/redis.config'
import { RedisService } from 'src/cache/redis.service'
import { coreConfig } from 'src/core/config'
import { EventModule } from 'src/event/event.module'
import { EventService } from 'src/event/services/event.service'
import { FoldersModule } from 'src/folders/folders.module'
import { FolderService } from 'src/folders/services/folder.service'
import { S3Module } from 'src/storage/storage.module'
import { ServerModule } from 'src/server/server.module'
import { ServerConfigurationService } from 'src/server/services/server-configuration.service'

import { NotifyPendingEventsProcessor } from './processors/notify-pending-events.processor'
import { SocketService } from './socket.service'

@Module({
  controllers: [],
  imports: [
    forwardRef(() => FoldersModule),
    forwardRef(() => AppModule),
    forwardRef(() => AuthModule),
    ServerModule,
    S3Module,
    EventModule,
    ConfigModule.forFeature(redisConfig),
    ConfigModule.forFeature(authConfig),
    ConfigModule.forFeature(coreConfig),
    ConfigModule.forFeature(appConfig),
  ],
  providers: [
    JWTService,
    SocketService,
    FolderService,
    EventService,
    AppService,
    RedisService,
    ServerConfigurationService,
    NotifyPendingEventsProcessor,
  ],
  exports: [SocketService, RedisService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SocketModule {}
