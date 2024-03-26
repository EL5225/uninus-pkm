import type { Config } from 'drizzle-kit';

export default {
  schema: './libs/drizzle/src/backoffice/schema.ts',
  out: './libs/drizzle/src/backoffice/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env['DATABASE_URL'] as string,
  },
} satisfies Config;
