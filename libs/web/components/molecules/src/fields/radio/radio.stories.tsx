import type { Meta, StoryObj } from '@storybook/react';

import { FieldRadio } from './radio';

const meta: Meta<typeof FieldRadio> = {
  component: FieldRadio,
  tags: ['autodocs'],
  title: 'Components/Molecules/Field Radio',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FieldRadio>;

export const Primary: Story = {
  args: {},
};
