import { TInputMolecule, TSelect } from '@psu/entities';
import { InputSelect } from '@psu/web-component-atoms';
import { FC, ReactElement } from 'react';
import { Fieldset } from '@psu/web-component-templates';

export const FieldSelect: FC<TSelect & TInputMolecule> = (
  props
): ReactElement => {
  return (
    <Fieldset {...props}>
      <InputSelect {...props} />
    </Fieldset>
  );
};
