import type { Config } from 'drizzle-kit';

export default {
  schema: './libs/drizzle/src/market/schema.ts',
  out: './libs/drizzle/src/market/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env['DATABASE_URL'] as string,
  },
} satisfies Config;
