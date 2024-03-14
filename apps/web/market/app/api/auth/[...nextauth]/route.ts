import NextAuth from 'next-auth';
import { authOptions } from '@psu/web-auth';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
