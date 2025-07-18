import { jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { foldersTable } from 'src/folders/entities/folder.entity'

import { eventsTable } from '../../event/entities/event.entity'

export const tasksTable = pgTable('tasks', {
  id: uuid('id').primaryKey(),
  ownerIdentifier: text('ownerIdentifier').notNull(), // core, app:core, app:other, ...
  taskKey: text('taskKey').notNull(),
  taskDescription: jsonb('taskDescription')
    .$type<{
      textKey: string
      variables: Record<string, string>
    }>()
    .notNull(),
  inputData: jsonb('inputData')
    .notNull()
    .$type<Record<string, string | number>>(),
  updates: jsonb('updates')
    .notNull()
    .$type<
      { updateData: Record<string, unknown>; updateTemplateString: string }[]
    >()
    .default([]),
  triggeringEventId: uuid('triggeringEventId')
    .notNull()
    .references(() => eventsTable.id),
  handlerId: text('handlerId'),
  subjectFolderId: uuid('subjectFolderId').references(() => foldersTable.id),
  subjectObjectKey: text('subjectObjectKey'),
  startedAt: timestamp('startedAt'),
  completedAt: timestamp('completedAt'),
  errorAt: timestamp('errorAt'),
  errorCode: text('errorCode'),
  errorMessage: text('errorMessage'),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
  workerIdentifier: text('workerIdentifier'),
})

export type Task = typeof tasksTable.$inferSelect
export type NewTask = typeof tasksTable.$inferInsert
