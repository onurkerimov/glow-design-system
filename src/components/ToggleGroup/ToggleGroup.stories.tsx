import ToggleGroup from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => <ToggleGroup type="multiple" options={['react', 'vue', 'svelte']} />,

};
