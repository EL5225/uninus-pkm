import React from 'react';
import { render } from '@testing-library/react';
import { ControlledFieldCheckbox } from './checkbox';
import { useForm } from 'react-hook-form';

const ComponentTestWithControll = () => {
  const { control } = useForm();
  return <ControlledFieldCheckbox name="test" control={control} />;
};

describe('Controlled Field Checkbox Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<ComponentTestWithControll />);
    expect(baseElement).toBeTruthy();
  });
});
