'use client';
import { trpc } from '@psu/trpc-client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { PropsWithChildren, ReactElement, FC } from 'react';

export const ReactQueryProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const query = new QueryClient();
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: process.env.NEXT_PUBLIC_API_URL as string,
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={query}>
      <QueryClientProvider client={query}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
