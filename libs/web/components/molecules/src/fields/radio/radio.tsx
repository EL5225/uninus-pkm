import { TInputSpecial } from '@psu/entities';
import { InputRadio } from '@psu/web-component-atoms';
import { Fieldset } from '@psu/web-component-templates';
import { FC, ReactElement } from 'react';

export const FieldRadio: FC<TInputSpecial> = (props): ReactElement => {
  return (
    <Fieldset type="radio" {...props}>
      <InputRadio {...props} />
    </Fieldset>
  );
};
