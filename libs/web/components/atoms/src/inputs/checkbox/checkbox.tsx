import { FC, useId } from 'react';
import { TInputSpecial } from '@psu/entities';
import clsx from 'clsx';

export const InputCheckbox: FC<TInputSpecial> = ({
  size = 'sm',
  status = 'primary',
  ...props
}) => {
  const id = useId();

  const className = clsx(
    'before:block before:-translate-y-2/4 before:-translate-x-2/4',
    "before:content[''] peer relative cursor-pointer appearance-none rounded",
    'border border-grey transition-all before:absolute before:top-2/4 before:left-2/4',
    'before:rounded-full before:bg-primary-2 before:opacity-0 before:transition-opacity',
    'checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10',
    'disabled:cursor-not-allowed disabled:before:bg-grey disabled:checked:bg-grey disabled:bg-white disabled:border-grey disabled:opacity-50',
    {
      'h-4 w-4 before:h-8 before:w-8': size === 'sm',
      'h-5 w-5 before:h-11 before:w-11': size === 'md',
      'h-6 w-6 before:h-12 before:w-12': size === 'lg',
    }
  );

  const iconClassName = clsx(
    'absolute text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100',
    {
      'left-[1px]': size === 'sm',
      'left-[2px]': size === 'md' || size === 'lg',
    }
  );

  const svgClassName = clsx({
    'h-3 w-3 ml-[1px]': size === 'sm',
    'h-4 w-4': size === 'md',
    'h-5 w-5': size === 'lg',
  });

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center py-3 pr-2 rounded-full cursor-pointer"
        htmlFor="check"
      >
        <input {...props} type="checkbox" className={className} id={id} />
        <span className={iconClassName}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={svgClassName}
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
};
