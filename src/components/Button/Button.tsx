import { VariantProps, cva, cx } from 'class-variance-authority'
import styles from './styles.module.css'
import React from 'react'

const getRootClass = cva(styles.Button, {
  variants: {
    variant: {
      outlined: 'glow-borders',
      contained: 'glow-full',
    },
  },
  defaultVariants: {
    variant: 'outlined'
  }
})


const Button = (props: React.ComponentProps<'button'> & VariantProps<typeof getRootClass>) => {
  const { variant = 'outlined', ...rest } = props
  return (
    <button {...rest} className={cx(getRootClass({ variant }), props.className)}>
      <span className={cx({'glow-text': variant !== 'contained'})}>{props.children}</span>
    </button>
  )
}

export default Button