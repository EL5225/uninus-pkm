import { publicProcedure, router } from '../../config';

export const marketRouter = router({
  greet: publicProcedure.query(() => {
    return {
      message: 'Hello from market tRPC!',
    };
  }),
  test: publicProcedure.query(() => 'Test from market tRPC!'),
});

export type MarketRouter = typeof marketRouter;
