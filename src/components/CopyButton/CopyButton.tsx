import { cx } from "class-variance-authority"
import { useEffect, useRef } from "react"
import style from './styles.module.css'

const CopyButton = (props: React.ComponentProps<'div'> & { isActive: boolean, setIsActive: (value: boolean) => void }) => {
  const { setIsActive: onChangeActiveState } = props
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if(props.isActive) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => onChangeActiveState(false), 1000)  
    }
  }, [props.isActive])

  return (
    <div {...props} className={cx('relative', style.container, props.className, {[style.active]: props.isActive})} >
      <CopyIcon />
      <div className="absolute">
        <TickIcon />
      </div>
    </div>
  )
}

function CopyIcon() {
  return <svg width="20" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
  </svg>
}

const TickIcon = () => {
  return (
    <svg width="20" className={style.tick} viewBox="0 0 24 24">
      <path fill="#00d600" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
    </svg>
  )
}

export default CopyButton
