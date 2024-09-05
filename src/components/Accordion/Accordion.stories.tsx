import Accordion from ".";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordionItems = [
  {
    id: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    title: 'Is it unstyled?',
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
    contentClassName: 'glow-text',
  },
  {
    id: 'item-3',
    title: 'Can it be animated?',
    content: (
        'Yes! You can animate the Accordion with CSS or JavaScript.'
    ),
  },
];

export const Outlined: Story = {
  render: () => <Accordion items={accordionItems} />,

};

export const Contained = {
  render: () => <Accordion variant={'contained'} items={accordionItems} />,
};