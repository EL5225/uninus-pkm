import { FC, ReactElement } from 'react';
import { clsx } from 'clsx';
import { TMessage } from '@psu/entities';

export const Message: FC<TMessage> = (props): ReactElement => {
  const { status = 'default' } = props;

  const className = clsx(
    'text-xs flex items-center pt-1 gap-x-1 mt-[-7px]',
    {
      'text-red': status === 'error',
      'text-green': status === 'success',
      'text-grey': status === 'default',
      'text-yellow-60%': status === 'warning',
    },
    props.className
  );

  return (
    <span className={className} {...props}>
      {props.children}
    </span>
  );
};
