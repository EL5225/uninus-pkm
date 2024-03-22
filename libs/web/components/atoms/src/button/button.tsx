import { Fragment, type FC, type ReactElement } from 'react';
import { P, match } from 'ts-pattern';
import Link from 'next/link';
import { TButton, cn } from '@psu/entities';
import { AiFillCaretDown } from 'react-icons/ai';

export const Button: FC<TButton> = ({
  variant = 'primary',
  size = 'sm',
  variantType = 'primary',
  state = 'default',
  useIconArrowDown,
  className,
  ...props
}): ReactElement => {
  const classNames = cn(
    'rounded-md text-white font-medium transition-all disabled:cursor-not-allowed disabled:hover:opacity-100 disabled:bg-primary-10% disabled:text-neutral-10% px-4 py-2',
    className,
    {
      'bg-primary hover:bg-primary-60% active:bg-primary-90%':
        variant === 'primary' && variantType === 'primary',
      'bg-secondary hover:bg-secondary-60% active:bg-secondary-90%':
        variant === 'secondary' && variantType === 'primary',
      'bg-red hover:bg-red-60% active:bg-red-90%':
        variant === 'error' && variantType === 'primary',
    },
    {
      'border border-primary text-primary':
        variant === 'primary' && variantType === 'secondary',
      'border border-secondary text-secondary':
        variant === 'secondary' && variantType === 'secondary',
      'border border-red text-red':
        variant === 'error' && variantType === 'secondary',
    },
    {
      'border-none bg-none text-primary':
        variant === 'primary' && variantType === 'text-only',
      'border-none bg-none text-secondary':
        variant === 'secondary' && variantType === 'text-only',
      'border-none bg-none text-red':
        variant === 'error' && variantType === 'text-only',
    },
    {
      'md:text-[10px] md:px-2.5 md:py-1.5': size === 'sm',
      'md:text-xs md:px-3 md:py-2': size === 'md',
      'md:text-sm md:px-3.5 md:py-2.5': size === 'lg',
    },
    {
      'flex gap-1.5 lg:gap-2 items-center':
        useIconArrowDown === 'right' || useIconArrowDown === 'left',
    }
  );

  const classNameArrowDown = cn({
    'text-sm md:text-base mt-0.5': size === 'lg',
    'text-xs md:text-sm': size === 'md',
    'text-[10px] md:text-xs': size === 'sm',
  });

  const iconArrowDown = match(useIconArrowDown)
    .with('left', () => (
      <Fragment>
        <AiFillCaretDown className={classNameArrowDown} /> {props.children}
      </Fragment>
    ))
    .with('right', () => (
      <Fragment>
        {props.children} <AiFillCaretDown className={classNameArrowDown} />
      </Fragment>
    ))
    .otherwise(() => props.children);

  const buttonState = match(state)
    .with('default', () => iconArrowDown)
    .with('loading', () => 'Loading...')
    .exhaustive();

  return match(props.href)
    .with(undefined, () => (
      <button className={classNames} {...props}>
        {buttonState}
      </button>
    ))
    .with(P.string, (link) => (
      <Link href={link}>
        <button className={classNames} {...props}>
          {buttonState}
        </button>
      </Link>
    ))
    .exhaustive();
};
