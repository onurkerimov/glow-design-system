import * as Slider from '@radix-ui/react-slider';
import styles from './styles.module.css';
import { cx } from 'class-variance-authority';

const SliderDemo = () => (
    <Slider.Root className={styles.SliderRoot} defaultValue={[50]} max={100} step={1}>
      <Slider.Track className={cx(styles.SliderTrack,'glow-full')}>
        <Slider.Range className={styles.SliderRange} />
      </Slider.Track>
      <Slider.Thumb className={cx(styles.SliderThumb, "glow-full")} aria-label="Volume" />
    </Slider.Root>
);

export default SliderDemo;