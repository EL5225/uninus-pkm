import type { FC, ReactElement } from 'react';
import { P, match } from 'ts-pattern';
import Link from 'next/link';
import { TButton, cn } from '@psu/entities';

export const Button: FC<TButton> = ({
  variant = 'primary',
  size = 'sm',
  variantType = 'solid',
  state = 'default',
  ...props
}): ReactElement => {
  const className = cn(
    'rounded-sm text-white hover:opacity-80 font-medium transition-all',
    'disabled:cursor-not-allowed disabled:hover:opacity-80 disabled:bg-neutral-20%',
    'px-4 py-2',
    {
      'border bg-transparent border-neutral-20% text-neutral-90%':
        variantType === 'outline',
      'border-none': variantType === 'solid',
    },
    {
      'bg-primary': variant === 'primary' && variantType === 'solid',
      'bg-secondary': variant === 'secondary' && variantType === 'solid',
      'bg-red': variant === 'error' && variantType === 'solid',
      'bg-yellow': variant === 'warning' && variantType === 'solid',
    },
    {
      'border-bg-primary text-primary':
        variant === 'primary' && variantType === 'outline',
      'border-bg-secondary text-secondary':
        variant === 'secondary' && variantType === 'outline',
      'border-bg-green text-green':
        variant === 'success' && variantType === 'outline',
      'border-bg-red text-red':
        variant === 'error' && variantType === 'outline',
      'border-bg-yellow text-yellow':
        variant === 'warning' && variantType === 'outline',
    },
    {
      'md:text-[10px] md:px-2 md:py-1': size === 'sm',
      'md:text-xs md:px-4 md:py-2': size === 'md',
      'md:text-sm md:px-6 md:py-3': size === 'lg',
    }
  );

  const buttonState = match(state)
    .with('default', () => props.children)
    .with('loading', () => 'Loading...')
    .exhaustive();

  return match(props.href)
    .with(undefined, () => (
      <button className={className} {...props}>
        {buttonState}
      </button>
    ))
    .with(P.string, (link) => (
      <Link href={link}>
        <button className={className} {...props}>
          {buttonState}
        </button>
      </Link>
    ))
    .exhaustive();
};
