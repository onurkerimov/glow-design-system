import * as ToggleGroup from '@radix-ui/react-toggle-group';
import './styles.css';

const ToggleGroupDemo = () => (
  <ToggleGroup.Root
    className="ToggleGroup glow-borders glow-inner"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <div className='glow-outer'/>
    <ToggleGroup.Item className="ToggleGroupItem" value="left" aria-label="Left aligned">
      <div className="glow-text">REACT</div>
    </ToggleGroup.Item>
    <ToggleGroup.Item className="ToggleGroupItem" value="center" aria-label="Center aligned">
      <div className="glow-text">VUE</div>
    </ToggleGroup.Item>
    <ToggleGroup.Item className="ToggleGroupItem" value="right" aria-label="Right aligned">
      <div className="glow-text">SVELTE</div>
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);

export default ToggleGroupDemo;