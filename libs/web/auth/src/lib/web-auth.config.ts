import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CreadentialProvider from 'next-auth/providers/credentials';
import { PostLogin, PostLoginByGoogle } from './web-auth.api';
import { TMetaErrorResponse, TToken, TUser, VSLogin } from '@psu/entities';

export const authOptions = {
  pages: {
    signIn: '/auth/login',
  },
  session: { strategy: 'jwt' },
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

          const validatedFields = VSLogin.safeParse(credentials);

          if (validatedFields.success) {
            const { email, password } = validatedFields.data;
            const user = await PostLogin({ email, password });
            return user;
          }

          return null;
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
    async jwt({ token, profile, account, user }) {
      if (account?.provider === 'google' && profile) {
        const response = await PostLoginByGoogle({
          accessToken: account?.access_token as string,
        });

        token = {
          ...response,
          token: response?.token as TToken,
          user: response?.user as TUser,
        };
      }

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
