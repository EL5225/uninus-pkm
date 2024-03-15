import { marketRouter } from '@psu/web-services';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = async (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: marketRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
