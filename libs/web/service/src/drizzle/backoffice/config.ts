import type { Config } from 'drizzle-kit';

export default {
  schema: './libs/web/service/src/drizzle/backoffice/schema.ts',
  out: './libs/web/service/src/drizzle/backoffice/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config;
