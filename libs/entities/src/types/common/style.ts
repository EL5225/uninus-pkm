import { TInput } from '.';
import { cn } from '../../utils';

export const className = ({ size = 'sm', status = 'default' }: TInput) =>
  cn(
    'rounded-md w-full border outline-none focus:ring-none focus:outline-none',
    'disabled:cursor-not-allowed disabled:bg-grey-50',
    'transition duration-300 ease-in-out px-3 py-2 text-sm',
    {
      'md:px-3 md:py-2 md:text-xs': size === 'sm' || !size,
      'md:px-4 md:py-3': size === 'md',
      'md:px-5 md:py-4': size === 'lg',
    },
    {
      'bg-white border-2 border-green text-neutral-30% placeholder:text-neutral-30%':
        status === 'default' || !status,
      'bg-green-10% text-green placeholder:text-green': status === 'success',
      'bg-red-10% text-red placeholder:text-red': status === 'error',
      'bg-yellow-10% text-yellow-60% placeholder:text-yellow-60%':
        status === 'warning',
    }
  );
