import Card from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Outlined: Story = {
  render: () => <Card>Get Started</Card>,
};

export const Contained: Story = {
  render: () => <Card variant="contained">Get Started</Card>,
};
