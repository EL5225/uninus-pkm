import type { Meta, StoryObj } from '@storybook/react';

import { ControlledFieldText } from './text';
import { useForm } from 'react-hook-form';

const FormField = () => {
  const { control } = useForm();
  return (
    <ControlledFieldText
      label="Apakah anda setuju"
      size="sm"
      status="default"
      control={control}
      name="approve"
    />
  );
};

const meta: Meta<typeof ControlledFieldText> = {
  component: FormField,
  tags: ['autodocs'],
  title: 'Components/Organisms/Controlled Field Text',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ControlledFieldText>;

export const Primary: Story = {
  args: {},
};
