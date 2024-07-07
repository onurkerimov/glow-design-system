import * as RadioGroupRadix from '@radix-ui/react-radio-group';
import { cx } from 'class-variance-authority'
import styles from './styles.module.css';

type Item = { value: string } & Partial<{ key: string, label: string, onClick: () => void }>

const getItem = (arg: string | Item) => {
  const item = typeof arg === 'string' ? { value: arg } : arg
  if (!item.label) item.label = item.value
  if (!item.key) item.key = item.value
  if (!item.onClick) item.onClick = () => {}
  return item
}

const ToggleGroup = (props: { options: string[] } & RadioGroupRadix.RadioGroupProps) => (
  <RadioGroupRadix.Root
    className={cx(styles.ToggleGroup, 'glow-borders glow-inner')}
    defaultValue={props.options[0]}
    {...props}
  >
    {/* <div className='glow-outer'/> */}
    {props.options.map((arg) => {
      const item = getItem(arg)
      return (
        <RadioGroupRadix.Item className={styles.ToggleGroupItem} value={item.value} key={item.key}>
          <RadioGroupRadix.RadioGroupIndicator className={styles.Indicator} />
          <div className="glow-text">{item.label}</div>
        </RadioGroupRadix.Item>
      )
    })}
  </RadioGroupRadix.Root>
);

export default ToggleGroup;