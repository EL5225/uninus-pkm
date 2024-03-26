import { router } from '@psu/trpc-server';
import { userController } from '../user';

export const marketRouter = router({
  userRouter: userController(),
});
