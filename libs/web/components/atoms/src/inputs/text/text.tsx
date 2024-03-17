import { FC, useId } from 'react';
import { TInput, className } from '@psu/entities';

export const InputText: FC<TInput> = ({
  size = 'sm',
  status = 'default',
  placeholder = 'Masukkan Data',
  ...props
}) => {
  const id = useId();

  return (
    <input
      {...props}
      id={id}
      className={className({ size, status })}
      placeholder={placeholder}
    />
  );
};
