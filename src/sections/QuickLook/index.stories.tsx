import type { Meta, StoryObj } from '@storybook/react';
import QuickLook from '.';

const meta: Meta<typeof QuickLook> = {
  component: QuickLook,
};

export default meta;
type Story = StoryObj<typeof QuickLook>;


export const Default: Story = {
  name: 'QuickLook',
  render: QuickLook
};

