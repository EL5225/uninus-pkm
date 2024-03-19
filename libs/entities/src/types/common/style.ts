import { TInput } from '.';
import { cn } from '../../utils';

export const className = ({
  size = 'sm',
  status = 'default',
  append,
  prepend,
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
        (size === 'sm' && append) || (!size && append),
      'md:pl-4 md:pr-8 md:py-3': size === 'md' && append,
      'md:pl-5 md:pr-9 md:py-4': size === 'lg' && append,
    },
    {
      'md:pr-3 md:pl-7 md:py-2 md:text-xs':
        (size === 'sm' && prepend) || (!size && prepend),
      'md:pr-4 md:pl-8 md:py-3': size === 'md' && prepend,
      'md:pr-5 md:pl-9 md:py-4': size === 'lg' && prepend,
    },
    {
      'md:px-7 md:py-2 md:text-xs':
        (size === 'sm' && append && prepend) || (!size && append && prepend),
      'md:px-8 md:py-3': size === 'md' && append && prepend,
      'md:px-9 md:py-4': size === 'lg' && append && prepend,
    },
    {
      'bg-white border border-neutral-60% focus-within:border-neutral-100% text-neutral-100% placeholder:text-neutral-50%':
        status === 'default' || !status,
      'bg-primary-10% border-primary text-primary placeholder:text-primary-40%':
        status === 'success',
      'bg-red-10% text-red placeholder:text-red': status === 'error',
      'bg-secondary-10% border-secondary text-secondary-60% placeholder:text-secondary-40%':
        status === 'warning',
    }
  );
