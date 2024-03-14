/* eslint-disable @typescript-eslint/no-empty-interface */
import { DefaultSession } from 'next-auth';
import { TLoginResponse } from '@psu/entities';

type TProfile = {
  picture?: string;
};

declare module 'next-auth' {
  interface Session extends DefaultSession, TLoginResponse {}
  interface Profile extends TProfile {}
  interface AdapterUser extends TLoginResponse {}
}

declare module 'next-auth/jwt' {
  interface JWT extends TLoginResponse {}
}

declare module 'next-auth/core/types' {
  interface User extends Partial<TLoginResponse> {}
  interface AdapterUser extends Partial<TLoginResponse> {}
}
