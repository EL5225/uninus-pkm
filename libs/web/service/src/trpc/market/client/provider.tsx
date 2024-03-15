'use client';
import { FC, PropsWithChildren } from 'react';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const MarketProvider: FC<PropsWithChildren> = ({ children }) => {
  const query = new QueryClient();
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/api/trpc',
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={query}>
      <QueryClientProvider client={query}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
