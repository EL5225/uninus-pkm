import { TControlledInputSpecial } from '@psu/entities';
import { FieldCheckbox } from '@psu/web-component-molecules';
import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

export const ControlledFieldCheckbox = <T extends FieldValues>(
  props: TControlledInputSpecial<T>
): ReactElement => {
  const { field } = useController<T>(props);
  return <FieldCheckbox {...field} {...props} />;
};
