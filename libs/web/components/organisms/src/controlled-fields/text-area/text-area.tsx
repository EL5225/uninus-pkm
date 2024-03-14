import { TControlledTextArea } from '@psu/entities';
import { FieldTextArea } from '@psu/web-component-molecules';
import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

export const ControlledFieldTextArea = <T extends FieldValues>(
  props: TControlledTextArea<T>
): ReactElement => {
  const { field } = useController<T>(props);
  return <FieldTextArea {...field} {...props} />;
};
