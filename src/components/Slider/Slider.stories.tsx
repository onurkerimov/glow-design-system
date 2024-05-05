import Slider from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider />,

};
