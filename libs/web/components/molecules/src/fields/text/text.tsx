import { TInput, TInputMolecule } from '@psu/entities';
import { InputText } from '@psu/web-component-atoms';
import { FC, ReactElement } from 'react';
import { Fieldset } from '@psu/web-component-templates';

export const FieldText: FC<TInput & TInputMolecule> = (props): ReactElement => {
  return (
    <Fieldset {...props}>
      <InputText {...props} />
    </Fieldset>
  );
};
