import * as ToggleGroupRadix from '@radix-ui/react-toggle-group';
import { cx } from 'class-variance-authority'
import styles from './styles.module.css';

import type { ComponentProps } from 'react';

const ToggleGroup = (props: { options: string[] } & ComponentProps<typeof ToggleGroupRadix.Root>) => (
  <ToggleGroupRadix.Root
    className={cx(styles.ToggleGroup, 'glow-borders glow-inner glow-full')}
    {...props}
  >
    {/* <div className='glow-outer'/> */}
    {props.options.map((item) => (
      <ToggleGroupRadix.Item className={styles.ToggleGroupItem} value={item} key={item}>
        <div className="glow-text">{item}</div>
      </ToggleGroupRadix.Item>
    ))}
  </ToggleGroupRadix.Root>
);

export default ToggleGroup;