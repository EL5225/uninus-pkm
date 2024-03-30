import type { Meta, StoryObj } from '@storybook/react';
import { UiOrganisms } from './ui-organisms';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiOrganisms> = {
  component: UiOrganisms,
  title: 'UiOrganisms',
};
export default meta;
type Story = StoryObj<typeof UiOrganisms>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiOrganisms!/gi)).toBeTruthy();
  },
};
