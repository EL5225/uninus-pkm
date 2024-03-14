import { TControlledInput } from '@psu/entities';
import { FieldText } from '@psu/web-component-molecules';
import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

export const ControlledFieldText = <T extends FieldValues>(
  props: TControlledInput<T>
): ReactElement => {
  const { field } = useController<T>(props);
  return <FieldText {...props} {...field} />;
};
