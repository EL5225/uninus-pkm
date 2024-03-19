import { FC, useId } from 'react';
import { TInput, className, cn } from '@psu/entities';

export const InputText: FC<TInput> = ({
  size = 'sm',
  status = 'default',
  placeholder = 'Masukkan Data',
  ...props
}) => {
  const id = useId();

  if (props.append && props.prepend) {
    return (
      <div
        className={cn(
          'relative',
          {
            'text-neutral-60% focus-within:text-neutral-100%':
              status === 'default' || !status,
            'bg-primary-10% text-primary placeholder:text-primary':
              status === 'success',
            'bg-red-10% text-red placeholder:text-red': status === 'error',
            'bg-secondary-10% text-secondary-60% placeholder:text-secondary-60%':
              status === 'warning',
          },
          {
            'text-sm': size === 'sm',
            'text-lg': size === 'md',
            'text-xl': size === 'lg',
          }
        )}
      >
        <input
          {...props}
          id={id}
          className={className({
            size,
            status,
            append: props.append,
            prepend: props.prepend,
          })}
          placeholder={placeholder}
        />
        <span
          className={cn('absolute top-1/2 right-2 transform -translate-y-1/2')}
        >
          {props.append}
        </span>
        <span
          className={cn('absolute top-1/2 left-2 transform -translate-y-1/2')}
        >
          {props.prepend}
        </span>
      </div>
    );
  }

  if (props.append) {
    return (
      <div
        className={cn(
          'relative',
          {
            'text-neutral-60% focus-within:text-neutral-100%':
              status === 'default' || !status,
            'bg-primary-10% text-primary placeholder:text-primary':
              status === 'success',
            'bg-red-10% text-red placeholder:text-red': status === 'error',
            'bg-secondary-10% text-secondary-60% placeholder:text-secondary-60%':
              status === 'warning',
          },
          {
            'text-sm': size === 'sm',
            'text-lg': size === 'md',
            'text-xl': size === 'lg',
          }
        )}
      >
        <input
          {...props}
          id={id}
          className={className({ size, status, append: props.append })}
          placeholder={placeholder}
        />
        <span
          className={cn('absolute top-1/2 right-2 transform -translate-y-1/2')}
        >
          {props.append}
        </span>
      </div>
    );
  }
  if (props.prepend) {
    return (
      <div
        className={cn(
          'relative',
          {
            'text-neutral-60% focus-within:text-neutral-100%':
              status === 'default' || !status,
            'bg-primary-10% text-primary placeholder:text-primary':
              status === 'success',
            'bg-red-10% text-red placeholder:text-red': status === 'error',
            'bg-secondary-40% text-secondary-60% placeholder:text-secondary-60%':
              status === 'warning',
          },
          {
            'text-sm': size === 'sm',
            'text-lg': size === 'md',
            'text-xl': size === 'lg',
          }
        )}
      >
        <input
          {...props}
          id={id}
          className={className({ size, status, prepend: props.prepend })}
          placeholder={placeholder}
        />
        <span
          className={cn('absolute top-1/2 left-2 transform -translate-y-1/2')}
        >
          {props.prepend}
        </span>
      </div>
    );
  }

  return (
    <input
      {...props}
      id={id}
      className={className({ size, status })}
      placeholder={placeholder}
    />
  );
};
