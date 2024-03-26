import { router } from '@psu/trpc-server';
import { marketRouter } from '@psu/api-lib-market';

export const appRouter = router({
  market: marketRouter,
});

export type appRouter = typeof appRouter;
