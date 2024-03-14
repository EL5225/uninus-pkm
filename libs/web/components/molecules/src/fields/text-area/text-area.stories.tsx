import type { Meta, StoryObj } from '@storybook/react';

import { FieldTextArea } from './text-area';

const meta: Meta<typeof FieldTextArea> = {
  component: FieldTextArea,
  tags: ['autodocs'],
  title: 'Components/Molecules/Field Text Area',
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
type Story = StoryObj<typeof FieldTextArea>;

export const Primary: Story = {
  args: {
    status: 'default',
    size: 'sm',
  },
};
