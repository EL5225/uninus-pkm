import type { Meta, StoryObj } from '@storybook/react';

import { FieldText } from './text';

const meta: Meta<typeof FieldText> = {
  component: FieldText,
  tags: ['autodocs'],
  title: 'Components/Molecules/Field Text',
  argTypes: {
    status: {
      options: ['default', 'error', 'warning', 'success'],
      defaultValue: 'default',
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FieldText>;

export const Primary: Story = {
  args: {
    status: 'default',
    label: 'Apakah anda gay?',
    size: 'sm',
  },
};
