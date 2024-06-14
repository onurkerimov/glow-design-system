import BrowserMockup from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BrowserMockup> = {
  component: BrowserMockup,
};

export default meta;
type Story = StoryObj<typeof BrowserMockup>;

export const Default: Story = {
  render: () => <BrowserMockup>Content</BrowserMockup>,
};