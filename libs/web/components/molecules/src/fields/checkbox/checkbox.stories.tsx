import type { Meta, StoryObj } from '@storybook/react';

import { FieldCheckbox } from './checkbox';

const meta: Meta<typeof FieldCheckbox> = {
  component: FieldCheckbox,
  tags: ['autodocs'],
  title: 'Components/Molecules/Field Checkbox',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FieldCheckbox>;

export const Primary: Story = {
  args: {
    label: 'Apakah anda gay?',
    text: 'Ya',
  },
};
