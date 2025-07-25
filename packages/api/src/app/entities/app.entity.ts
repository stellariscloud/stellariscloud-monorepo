import type {
  AppConfig,
  AppManifest,
  AppWorkerScriptMap,
} from '@stellariscloud/types'
import { jsonb, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const appsTable = pgTable('apps', {
  identifier: text('identifier').primaryKey(),
  publicKey: text('publicKey').notNull(),
  contentHash: text('contentHash').notNull(),
  config: jsonb('config').$type<AppConfig>().notNull(),
  workerScripts: jsonb('workerScripts').$type<AppWorkerScriptMap>().notNull(),
  manifest: jsonb('manifest').$type<AppManifest>().notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
})

export type App = typeof appsTable.$inferSelect
export type NewApp = typeof appsTable.$inferInsert
