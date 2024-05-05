import * as Slider from '@radix-ui/react-slider';
import './styles.css';

const SliderDemo = () => (
    <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
      <Slider.Track className="glow-full SliderTrack">
        <Slider.Range className="glow-outer SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb glow-full" aria-label="Volume" />
    </Slider.Root>
);

export default SliderDemo;