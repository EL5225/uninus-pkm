import type { Meta, StoryObj } from '@storybook/react';
import { UiMolecules } from './ui-molecules';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiMolecules> = {
  component: UiMolecules,
  title: 'UiMolecules',
};
export default meta;
type Story = StoryObj<typeof UiMolecules>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiMolecules!/gi)).toBeTruthy();
  },
};
