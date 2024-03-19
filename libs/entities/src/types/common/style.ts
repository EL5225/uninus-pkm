import { TInput } from '.';
import { cn } from '../../utils';

export const className = ({
  size = 'sm',
  status = 'default',
  iconRight,
}: TInput) =>
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
      'md:pl-3 md:pr-7 md:py-2 md:text-xs':
        (size === 'sm' && iconRight) || (!size && iconRight),
      'md:pl-4 md:pr-8 md:py-3': size === 'md' && iconRight,
      'md:pl-5 md:pr-9 md:py-4': size === 'lg' && iconRight,
    },
    {
      'bg-white border border-neutral-60% focus-within:border-neutral-100% text-neutral-100% placeholder:text-neutral-50%':
        status === 'default' || !status,
      'bg-green-10% text-green placeholder:text-green': status === 'success',
      'bg-red-10% text-red placeholder:text-red': status === 'error',
      'bg-yellow-10% text-yellow-60% placeholder:text-yellow-60%':
        status === 'warning',
    }
  );
