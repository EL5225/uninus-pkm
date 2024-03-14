import React from 'react';
import { render } from '@testing-library/react';
import { ControlledFieldTextArea } from './text-area';
import { useForm } from 'react-hook-form';

const ComponentTestWithControll = () => {
  const { control } = useForm();
  return <ControlledFieldTextArea size="sm" name="test" control={control} />;
};

describe('Controlled Field Text Area Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<ComponentTestWithControll />);
    expect(baseElement).toBeTruthy();
  });
});
