import type { Meta, StoryObj } from '@storybook/react';

import { ControlledFieldCheckbox } from './checkbox';
import { useForm } from 'react-hook-form';

const FormField = () => {
  const { control } = useForm();
  return (
    <ControlledFieldCheckbox
      label="Apakah anda setuju"
      text="Ya"
      size="sm"
      status="default"
      control={control}
      name="approve"
    />
  );
};

const meta: Meta<typeof ControlledFieldCheckbox> = {
  component: FormField,
  tags: ['autodocs'],
  title: 'Components/Organisms/Controlled Field Checkbox',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ControlledFieldCheckbox>;

export const Primary: Story = {
  args: {},
};
