import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import type { RedisClientType } from 'redis'
import { createClient } from 'redis'

import { redisConfig } from './redis.config'

@Injectable()
export class RedisService {
  client: RedisClientType

  constructor(
    @Inject(redisConfig.KEY)
    private readonly _redisConfig: ConfigType<typeof redisConfig>,
  ) {
    this.client = createClient({
      url: `redis://${this._redisConfig.redisHost}:${this._redisConfig.redisPort}`,
    })
    void this.client.connect()
  }

  async onModuleDestroy(): Promise<void> {
    await this.close()
  }

  async close() {
    await this.client.disconnect()
  }
}
