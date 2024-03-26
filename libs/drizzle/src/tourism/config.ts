import type { Config } from 'drizzle-kit';

export default {
  schema: './libs/drizzle/src/tourism/schema.ts',
  out: './libs/drizzle/src/tourism/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env['DATABASE_URL'] as string,
  },
} satisfies Config;
