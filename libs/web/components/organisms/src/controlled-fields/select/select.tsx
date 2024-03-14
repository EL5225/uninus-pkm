import { TControlledSelect } from '@psu/entities';
import { FieldSelect } from '@psu/web-component-molecules';
import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

export const ControlledFieldSelect = <T extends FieldValues>(
  props: TControlledSelect<T>
): ReactElement => {
  const { field } = useController<T>(props);
  return <FieldSelect {...field} {...props} />;
};
