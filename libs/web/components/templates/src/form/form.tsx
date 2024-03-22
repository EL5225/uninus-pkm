import { cn, TForm } from '@psu/entities';
import { FC, ReactElement } from 'react';

export const Form: FC<TForm> = (props): ReactElement => {
  return (
    <form
      className={cn(
        'w-full justify-center bg-white shadow-lg rounded-lg px-4 py-8 md:px-[48px] md:py-[32px] flex flex-col gap-y-3',
        props.className
      )}
      {...props}
    >
      {props.children}
    </form>
  );
};
