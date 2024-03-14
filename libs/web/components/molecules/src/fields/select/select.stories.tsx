import type { Meta, StoryObj } from '@storybook/react';

import { FieldSelect } from './select';

const meta: Meta<typeof FieldSelect> = {
  component: FieldSelect,
  tags: ['autodocs'],
  title: 'Components/Molecules/Field Select',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FieldSelect>;

export const Primary: Story = {
  args: {
    label: 'Apakah anda gay?',
    options: [
      { label: 'Ya', value: 'yes' },
      { label: 'Tidak', value: 'no' },
    ],
  },
};
