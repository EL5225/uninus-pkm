import type { Meta, StoryObj } from '@storybook/react';

import { ControlledFieldSelect } from './select';
import { useForm } from 'react-hook-form';

const FormField = () => {
  const { control } = useForm();
  return (
    <ControlledFieldSelect
      label="Apakah anda setuju"
      control={control}
      size="sm"
      status="default"
      name="approve"
      options={[
        { label: 'Ya', value: 'yes' },
        { label: 'Tidak', value: 'no' },
      ]}
    />
  );
};

const meta: Meta<typeof ControlledFieldSelect> = {
  component: FormField,
  tags: ['autodocs'],
  title: 'Components/Organisms/Controlled Field Select',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ControlledFieldSelect>;

export const Primary: Story = {
  args: {},
};
