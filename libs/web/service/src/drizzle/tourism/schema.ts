import { pgTable, text, uuid, date } from 'drizzle-orm/pg-core';

export * from '../common';

export const test = pgTable('app_test', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  createdAt: date('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: date('updated_at', { mode: 'date' }).notNull().defaultNow(),
});
