import type { OnModuleInit } from '@nestjs/common'
import { forwardRef, Inject, Module } from '@nestjs/common'
import nestJSConfig, { ConfigModule } from '@nestjs/config'
import { redisConfig } from 'src/cache/redis.config'
import { EventModule } from 'src/event/event.module'
import { FoldersModule } from 'src/folders/folders.module'
import { S3Module } from 'src/s3/s3.module'
import { S3Service } from 'src/s3/s3.service'

import { appConfig } from './config'
import { AppService } from './services/app.service'

@Module({
  imports: [
    ConfigModule.forFeature(redisConfig),
    ConfigModule.forFeature(appConfig),
    EventModule,
    S3Module,
    forwardRef(() => FoldersModule),
  ],
  providers: [AppService, S3Service],
  exports: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject(appConfig.KEY)
    private readonly _appConfig: nestJSConfig.ConfigType<typeof appConfig>,
  ) {}
  async onModuleInit() {
    await this.appService.updateAppsFromDisk(this._appConfig.appsLocalPath)
  }
}
