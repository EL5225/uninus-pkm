import type { Meta, StoryObj } from '@storybook/react';

import { ControlledFieldTextArea } from './text-area';
import { useForm } from 'react-hook-form';

const FormField = () => {
  const { control } = useForm();
  return (
    <ControlledFieldTextArea
      label="Apakah anda setuju"
      control={control}
      size="sm"
      status="default"
      name="approve"
    />
  );
};

const meta: Meta<typeof ControlledFieldTextArea> = {
  component: FormField,
  tags: ['autodocs'],
  title: 'Components/Organisms/Controlled Field Text Area',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ControlledFieldTextArea>;

export const Primary: Story = {
  args: {},
};
