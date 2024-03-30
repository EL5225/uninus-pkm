import type { Meta, StoryObj } from '@storybook/react';
import { UiAtoms } from './ui-atoms';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiAtoms> = {
  component: UiAtoms,
  title: 'UiAtoms',
};
export default meta;
type Story = StoryObj<typeof UiAtoms>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiAtoms!/gi)).toBeTruthy();
  },
};
