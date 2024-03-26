import { createTRPCReact } from '@trpc/react-query';
import type { appRouter } from '@psu/trpc-router';

export const trpc = createTRPCReact<appRouter>();
