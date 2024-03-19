import { TFieldSet } from '@psu/entities';
import { FC, ReactElement } from 'react';
import { match } from 'ts-pattern';
import { Label, Message } from '@psu/web-component-atoms';

export const Fieldset: FC<TFieldSet> = (props): ReactElement => {
  const { status = 'default' } = props;

  const inputType = match(props.type)
    .with('checkbox', () => (
      <section className="flex flex-col">
        {props?.label && (
          <Label
            id={props.id}
            htmlFor={props.name}
            disabled={props.disabled}
            size={props.size}
            required={props.required}
          >
            {props.label}
          </Label>
        )}
        <section className="flex items-center">
          {props.children}
          {props?.text && (
            <Label
              id={props.id}
              htmlFor={props.name}
              disabled={props.disabled}
              size={props.size}
            >
              {props.text}
            </Label>
          )}
        </section>
      </section>
    ))
    .with('radio', () => (
      <section className="flex flex-col gap-y-1">
        {props?.label && (
          <Label
            id={props.id}
            htmlFor={props.name}
            disabled={props.disabled}
            size={props.size}
            required={props.required}
          >
            {props.label}
          </Label>
        )}
        <div className="flex gap-x-4">{props.children}</div>
      </section>
    ))

    .otherwise(() => (
      <section className="relative flex flex-col gap-y-1 w-full">
        {props?.label && (
          <Label
            id={props.id}
            htmlFor={props.name}
            disabled={props.disabled}
            size={props.size}
            required={props.required}
          >
            {props.label}
          </Label>
        )}
        {props.children}
      </section>
    ));

  return (
    <fieldset className="flex flex-col gap-y-2 w-full">
      {inputType}
      {props.message && status !== 'default' && (
        <Message {...props}>{props.message}</Message>
      )}
      {props?.hint && (
        <Message className="text-xs italic mt-[-7px] text-grey" status={'none'}>
          *{props.hint}
        </Message>
      )}
    </fieldset>
  );
};
