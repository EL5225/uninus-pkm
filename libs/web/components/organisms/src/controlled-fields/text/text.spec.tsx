import React from 'react';
import { render } from '@testing-library/react';
import { ControlledFieldText } from './text';
import { useForm } from 'react-hook-form';

const ComponentTestWithControll = () => {
  const { control } = useForm();
  return <ControlledFieldText name="test" control={control} />;
};

describe('Controlled Field Text Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<ComponentTestWithControll />);
    expect(baseElement).toBeTruthy();
  });
});
