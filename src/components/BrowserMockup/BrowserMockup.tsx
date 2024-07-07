import { cx } from 'class-variance-authority'
import styles from './styles.module.css'
import React from 'react'

const BrowserMockup = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.OuterContainer}>
      <div className={cx(styles.Container)}>
        <div className={cx(styles.Root, 'glow-borders')}>
          {/* <div className='glow-outer'/> */}
          <div className={cx(styles.Buttons, 'glow-text')}>
            ⬤⬤⬤
          </div>
          <div className='glow-hr'></div>
        </div>
      </div>
      <div className={cx(styles.Content)}>
        {props.children}
      </div>
    </div>
  )
}

export default BrowserMockup