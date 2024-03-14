import { TInputMolecule, TTextArea } from '@psu/entities';
import { InputTextArea } from '@psu/web-component-atoms';
import { Fieldset } from '@psu/web-component-templates';
import { FC, ReactElement } from 'react';

export const FieldTextArea: FC<TTextArea & TInputMolecule> = (
  props
): ReactElement => {
  return (
    <Fieldset {...props}>
      <InputTextArea {...props} />
    </Fieldset>
  );
};
