import Accordion from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Outlined: Story = {
  render: () => <Accordion />,

};

export const Contained = {
  render: () => <Accordion variant={'contained'} />,
};