import { cx } from 'class-variance-authority'
import styles from './styles.module.css'

const Card = (props: { children?: React.ReactNode }) => {
  return (
    <div className='glow-borders glow-inner'>
      {/* <div className='glow-outer' /> */}
      <div className={cx('glow-text', styles.CardContent)}>
        {props.children}
      </div>
    </div>
  )
}

export default Card