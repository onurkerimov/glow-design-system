import * as RadioGroupRadix from '@radix-ui/react-radio-group';
import { cx } from 'class-variance-authority'
import styles from './styles.module.css';

const ToggleGroup = (props: { options: string[] }) => (
  <RadioGroupRadix.Root
    className={cx(styles.ToggleGroup, 'glow-borders glow-inner')}
    defaultChecked={props.options[0]}
  >
    <div className='glow-outer'/>
    {props.options.map((item) => (
      <RadioGroupRadix.Item className={styles.ToggleGroupItem} value={item} key={item}>
        <RadioGroupRadix.RadioGroupIndicator className={styles.Indicator} />
        <div className="glow-text">{item}</div>
      </RadioGroupRadix.Item>
    ))}
  </RadioGroupRadix.Root>
);

export default ToggleGroup;