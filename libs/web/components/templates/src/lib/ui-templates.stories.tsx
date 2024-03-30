import type { Meta, StoryObj } from '@storybook/react';
import { UiTemplates } from './ui-templates';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiTemplates> = {
  component: UiTemplates,
  title: 'UiTemplates',
};
export default meta;
type Story = StoryObj<typeof UiTemplates>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiTemplates!/gi)).toBeTruthy();
  },
};
