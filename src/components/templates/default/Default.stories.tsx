import RadioGroup from "../../RadioGroup";
import type { Meta, StoryObj } from '@storybook/react';
import styles from './styles.module.css'
import BrowserMockup from "../../BrowserMockup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <div className={styles.OuterContainer}>
      <div className={(styles.Container)}>
        <div>
          <h1 className="glow-text">
            Quick Look
          </h1>
          <p className="glow-text">
            xoid makes it easier to refactor between scopes, frameworks, and different degrees of reusability.
          </p>
        </div>
        <fieldset className="glow-text">
          Framework
          <RadioGroup options={['react', 'vue', 'svelte']} />
        </fieldset>
        <fieldset className="glow-text">
          Scope
          <RadioGroup options={['local', 'global']} />
        </fieldset>
        <fieldset className="glow-text">
          Reuse
          <RadioGroup options={['low', 'medium', 'high', 'highest']} />
        </fieldset>
      </div>
      <div>
        <BrowserMockup />
      </div>
    </div>
  )

};
