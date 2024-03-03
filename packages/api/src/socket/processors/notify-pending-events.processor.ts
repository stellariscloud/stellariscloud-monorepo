import { Processor, WorkerHost } from '@nestjs/bullmq'
import type { Job } from 'bullmq'
import { QueueName } from 'src/queue/queue.constants'

import { SocketService } from '../socket.service'

@Processor(QueueName.NotifyAppOfPendingEvents)
export class NotifyPendingEventsProcessor extends WorkerHost {
  constructor(private readonly socketService: SocketService) {
    super()
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async process(
    job: Job<{ appId: string; eventKey: string; eventCount: number }>,
  ): Promise<void> {
    console.log('Runnning notifyAppWorkersOfPendingEvents:', job.data)
    this.socketService.notifyAppWorkersOfPendingEvents(
      job.data.appId,
      job.data.eventKey,
      job.data.eventCount,
    )
  }
}
