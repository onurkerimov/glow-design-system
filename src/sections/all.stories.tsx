import Accordion from "../components/Accordion";
import Sparkles from "../components/Sparkles";
import FrameworksSection from "./FrameworksSection";
import HeaderHero from "./HeaderHero";
import QuickLook from "./QuickLook";
import type { Meta, StoryObj } from '@storybook/react';


const All = () => {
  return (
    <>
      <div className="first-sections">
        <HeaderHero />
        <QuickLook />
      </div>
      <FrameworksSection />
      {/* <Accordion variant={'contained'}/> */}
      {/* <div style={{
        width: 0, 
        height: 0, 
        position: 'absolute', 
        left: -60, 
        top: -120, 
        transform: 'translate(calc(var(--x-click) * 1px), calc(var(--y-click) * 1px))',
        pointerEvents: 'none',
        transition: 'transform 100ms'
      }}>
        <Sparkles>
          <div style={{width: 100, height: 100}}></div>
        </Sparkles>
      </div> */}
      <section>
        <div>
          <h1 className="glow-text">
            Easy to learn
          </h1>
          <p>
          <b>xoid</b> makes it easier to refactor between scopes, frameworks, and different degrees of reusability.
          <b>xoid</b> makes it easier to refactor between scopes, frameworks, and different degrees of reusability.
          Here's a showcase of <>xoid</>'s usage.
          </p>
        </div>
      </section>
    </>
  )
}

const meta: Meta<typeof All> = {
  component: All,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof All>;

export const Default: Story = {
  render: () => <All />,
};
