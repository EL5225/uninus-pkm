import { FC, useId } from 'react';
import { TTextArea, className } from '@psu/entities';

export const InputTextArea: FC<TTextArea> = ({
  size = 'sm',
  status = 'default',
  placeholder = 'Masukkan Data',
  ...props
}) => {
  const id = useId();
  return (
    <textarea
      {...props}
      id={id}
      className={className({ size, status })}
      placeholder={placeholder}
    />
  );
};
