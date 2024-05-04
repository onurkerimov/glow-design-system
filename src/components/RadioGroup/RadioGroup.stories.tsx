import RadioGroup from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => <RadioGroup options={['react', 'vue', 'svelte']} />,

};
