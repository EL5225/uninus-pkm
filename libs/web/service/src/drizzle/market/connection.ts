import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const dbUrl = String(process.env.DATABASE_URL);

const dbQueryClient = new Pool({
  connectionString: dbUrl,
});

export const dbMarket = drizzle(dbQueryClient, {
  schema,
});
