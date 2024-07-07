import './styles.css'

const Checkbox = (props: { id: string; label: string, value: boolean, onChange: (value: boolean) => void }) => {
  return (
    <div className="checkbox">
        <label htmlFor={props.id} className='glow-text'>
          {props.label}
        </label>
        <input className="glow-borders" type="checkbox" id={props.id} checked={props.value} onChange={(e) => props.onChange(e.target.checked)} />
    </div>
  )
}

export default Checkbox