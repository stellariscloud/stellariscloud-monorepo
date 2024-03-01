import { forwardRef, Module } from '@nestjs/common'
import { AppModule } from 'src/app/app.module'
import { AppService } from 'src/app/services/app.service'
import { CacheModule } from 'src/cache/cache.module'
import { EventModule } from 'src/event/event.module'
import { S3Module } from 'src/s3/s3.module'
import { ServerModule } from 'src/server/server.module'
import { ServerConfigurationService } from 'src/server/services/server-configuration.service'
import { SocketService } from 'src/socket/socket.service'

import { FoldersController } from './controllers/folders.controller'
import { FolderService } from './services/folder.service'

@Module({
  controllers: [FoldersController],
  imports: [
    S3Module,
    CacheModule,
    ServerModule,
    EventModule,
    forwardRef(() => AppModule),
  ],
  providers: [
    FolderService,
    SocketService,
    AppService,
    ServerConfigurationService,
  ],
  exports: [FolderService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class FoldersModule {}
