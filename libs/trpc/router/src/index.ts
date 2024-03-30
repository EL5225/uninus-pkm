import { router } from '@psu/trpc-server';

export const appRouter = router({
  market: {},
});

export type appRouter = typeof appRouter;
