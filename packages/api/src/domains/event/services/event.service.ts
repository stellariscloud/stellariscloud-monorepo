import { isNull, sql } from 'drizzle-orm'
import { Lifecycle, scoped } from 'tsyringe'
import { v4 as uuidV4 } from 'uuid'

import { OrmService } from '../../../orm/orm.service'
import { ModuleService } from '../../module/services/module.service'
import { eventsTable } from '../entities/event.entity'
import type { NewEventReceipt } from '../entities/event-receipt.entity'
import { eventReceiptsTable } from '../entities/event-receipt.entity'
import { ForbiddenEmitEvent } from '../errors/event.error'

@scoped(Lifecycle.ContainerScoped)
export class EventService {
  constructor(
    private readonly ormService: OrmService,
    private readonly moduleService: ModuleService,
  ) {}

  async emitEvent({
    moduleId,
    eventKey,
    data,
  }: {
    moduleId: string // id of the inserting module
    eventKey: string
    data: any
  }) {
    const now = new Date()

    // check this module can emit this event
    const actorModule = await this.moduleService.getModule(moduleId)
    if (!actorModule?.config.emitEvents.includes(eventKey)) {
      throw new ForbiddenEmitEvent()
    }

    await this.ormService.db.transaction(async (db) => {
      const [event] = await db
        .insert(eventsTable)
        .values([
          { id: uuidV4(), eventKey, createdAt: now, updatedAt: now, data },
        ])
        .returning()
      const eventReceipts: NewEventReceipt[] = await this.moduleService
        .listModules()
        .then((modules) =>
          modules
            .filter(
              (m) => m.enabled && m.config.subscribedEvents.includes(eventKey),
            )
            .map((m) => ({
              moduleId: m.id,
              eventKey: event.eventKey,
              id: uuidV4(),
              createdAt: now,
              updatedAt: now,
              eventId: event.id,
            })),
        )
      await db.insert(eventReceiptsTable).values(eventReceipts)
    })
  }

  async notifyPendingEvents() {
    const pendingEventReceipts = await this.ormService.db
      .select({
        eventKey: eventReceiptsTable.eventKey,
        moduleId: eventReceiptsTable.moduleId,
        count: sql<number>`cast(count(${eventReceiptsTable.id}) as int)`,
      })
      .from(eventReceiptsTable)
      .where(isNull(eventReceiptsTable.startedAt))
      .groupBy(eventReceiptsTable.eventKey, eventReceiptsTable.moduleId)

    const pendingEventsByModule = pendingEventReceipts.reduce<{
      [moduleId: string]: { [key: string]: number }
    }>(
      (acc, next) => ({
        ...acc,
        [next.moduleId]: {
          ...(next.moduleId in acc ? acc[next.moduleId] : {}),
          [next.eventKey]: next.count,
        },
      }),
      {},
    )

    for (const moduleId of Object.keys(pendingEventsByModule)) {
      for (const eventKey of Object.keys(pendingEventsByModule[moduleId])) {
        // Object.keys(pendingEventsByModule[moduleId]).map(moduleId)
        this.moduleService.broadcastEventsPending(
          moduleId,
          eventKey,
          pendingEventsByModule[moduleId][eventKey],
        )
      }
    }
  }
}
