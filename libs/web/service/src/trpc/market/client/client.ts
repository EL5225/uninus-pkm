import { createTRPCReact } from '@trpc/react-query';

import { type MarketRouter } from '..';

export const trpc = createTRPCReact<MarketRouter>();
