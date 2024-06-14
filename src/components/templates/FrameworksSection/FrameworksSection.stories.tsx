import FrameworksSection from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FrameworksSection> = {
  component: FrameworksSection,
};

export default meta;
type Story = StoryObj<typeof FrameworksSection>;

export const Default: Story = {
  render: () => <FrameworksSection />,
};
