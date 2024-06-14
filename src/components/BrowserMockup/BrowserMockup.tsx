import { cx } from 'class-variance-authority'
import styles from './styles.module.css'
import React from 'react'

const BrowserMockup = (props: { children: React.ReactNode }) => {
  return (
    <div className={cx(styles.OuterContainer)}>
      <div className={cx(styles.Root, 'glow-borders')}>
        <div className='glow-outer'/>
        <div className={cx(styles.Buttons, 'glow-text')}>
          ⬤⬤⬤
        </div>
        <div className='glow-hr'></div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default BrowserMockup