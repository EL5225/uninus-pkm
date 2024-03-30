import { timestamp, pgTable, text, uuid, date } from 'drizzle-orm/pg-core';

export const roles = pgTable('app_roles', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  permissions: text('permissions').notNull().array(),
  createdAt: date('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: date('updated_at', { mode: 'date' }).notNull().defaultNow(),
});

export const users = pgTable('user', {
  id: uuid('id').notNull().primaryKey(),
  fullname: text('email'),
  roleId: uuid('role_id').references(() => roles.id, { onDelete: 'cascade' }),
  password: text('password'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  createdAt: date('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: date('updated_at', { mode: 'date' }).notNull().defaultNow(),
});
