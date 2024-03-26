import { procedure } from '@psu/trpc-server';
import { z } from 'zod';

export const userController = () => {
  return {
    findMany: procedure
      .output(z.array(z.object({ id: z.number(), name: z.string() })))
      .query(() => {
        return [
          {
            id: 1,
            name: 'John Doe',
          },
        ];
      }),
  };
};
