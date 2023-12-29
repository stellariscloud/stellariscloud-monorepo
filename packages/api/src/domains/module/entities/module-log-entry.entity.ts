import { jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

import { modulesTable } from './module.entity'

export const moduleLogEntriesTable = pgTable('module_log_entries', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  moduleId: uuid('moduleId')
    .notNull()
    .references(() => modulesTable.id),
  message: text('message').notNull(),
  data: jsonb('data').$type<any>(),
  level: text('level').notNull().default('info'),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
})

export type ModuleLogEntry = typeof moduleLogEntriesTable.$inferSelect
export type NewModuleLogEntry = typeof moduleLogEntriesTable.$inferInsert
