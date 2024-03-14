import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  uuid,
  date,
} from 'drizzle-orm/pg-core';
import type { AdapterAccount } from '@auth/core/adapters';

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

export const accounts = pgTable(
  'account',
  {
    userId: uuid('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type').$type<AdapterAccount['token_type']>(),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
