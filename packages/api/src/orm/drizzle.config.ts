import type { Config } from 'drizzle-kit'
import path from 'path'

export default {
  schema: path.join(__dirname, `../**/entities/*.entity.ts`),
  out: path.join(__dirname, `migrations`),
  dialect: 'postgresql',
  dbCredentials: {
    url: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  },
} satisfies Config
