import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CreadentialProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { TMetaErrorResponse, TToken, TUser } from '@psu/entities';
import { dbBackoffice, roles, users } from '@psu/web-services';
import { eq } from 'drizzle-orm';
import * as argon2 from 'argon2';
import type { Adapter } from 'next-auth/adapters';

const authOptions = {
  pages: {
    signIn: '/auth/login',
  },
  session: { strategy: 'jwt' },
  adapter: DrizzleAdapter(dbBackoffice) as Adapter,
  providers: [
    GoogleProvider({
      id: 'google',
      name: 'google',
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    CreadentialProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error('Email dan Password wajib diisi');
          }

          const user = await dbBackoffice
            .select()
            .from(users)
            .leftJoin(roles, eq(users.roleId, roles.id))
            .where(eq(users.email, credentials.email as string))
            .then((res) => res.at(0));

          const isPasswordCorrect = await argon2.verify(
            user?.user?.password as string,
            credentials.password as string
          );

          if (!isPasswordCorrect) {
            throw new Error('Email atau Password salah');
          }

          return {
            id: user?.user?.id,
            email: user?.user?.email,
            fullname: user?.user?.fullname,
            image: user?.user?.image,
            role: {
              id: user?.app_roles?.id,
              name: user?.app_roles?.name,
              permissions: user?.app_roles?.permissions,
            },
          } as TUser;
        } catch (err) {
          const error = err as TMetaErrorResponse;

          if (error?.response?.status === 422) {
            throw new Error(error?.response?.data?.errors?.[0]?.message[0]);
          }

          throw new Error(
            typeof error?.response?.data === 'string'
              ? error?.response?.data
              : error?.response?.data?.message
          );
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === 'credentials' && user) {
        token = {
          ...user,
          token: user?.token as TToken,
          user: user.user as TUser,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session = { ...token, expires: token?.token?.expired?.toString() };
      return session;
    },
  },
} satisfies AuthOptions;

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
