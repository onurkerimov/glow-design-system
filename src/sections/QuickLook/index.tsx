import RadioGroup from "../../components/RadioGroup";
import styles from './styles.module.css'
import BrowserMockup from "../../components/BrowserMockup";
import CodeAnimate from "code-animate";
import { generateCode, getOptions, initialState } from "./generateCode";
import { useMemo, useState } from "react";
import 'prismjs/components/prism-jsx'
import './code.css'
import Checkbox from "../../components/Checkbox";

const bind = <T extends Record<K, unknown>, K extends PropertyKey>(
  useStatePair: [T, (value: T) => void], 
  key: K, 
  propNames = ['value', 'onChange']
) => {
  const [state, setState] = useStatePair
  return { 
    [propNames[0]]: state[key], 
    [propNames[1]]: (value: T[K]) => setState({...state, [key]: value})
  }
}

const useBoundState = <T,>(initialState: T) => {
  const $$state = useState(initialState)
  const fn = (key: keyof T, propNames?: [string, string]) => bind($$state, key, propNames)
  return [$$state[0], fn] as const
}

const getKey = (line: string) =>
  line
    .trim()
    .replace(/^(export )?const /, '')
    .substring(0, 7);

function Splitter(props: { framework: string }) {
  return <div className='splitter-wrapper'>
    <div className='splitter glow-hr'></div>
    <div className='glow-borders filename'>
      <span className="glow-text">
        Counter.{props.framework}
      </span>
    </div>
  </div>;
}

const QuickLook = () => {
  const [state, bind] = useBoundState(initialState)
  const codeText = useMemo(() => {
    const options = getOptions(state)
    return generateCode(options)
  }, [state])

  return (
    <section>
      <div className={styles.OuterContainer}>
        <div className={(styles.Container)}>
          <div>
            <h1 className="glow-text">
              Quick Look
            </h1>
            <p>
              <b>xoid</b> makes it easier to refactor between scopes, frameworks, and different degrees of reusability.
            </p>
          </div>
          <fieldset>
            Framework
            <RadioGroup {...bind('framework', ['value', 'onValueChange'])} options={['react', 'vue', 'svelte']} />
          </fieldset>
          <fieldset>
            Scope
            <RadioGroup {...bind('scope', ['value', 'onValueChange'])} options={['local', 'global']} />
          </fieldset>
          <fieldset>
            Reuse
            <RadioGroup {...bind('reuse', ['value', 'onValueChange'])} options={['low', 'medium', 'high', 'highest']} />
          </fieldset>
          <Checkbox label="Setters" id="setters" {...bind('setters')} />
        </div>
        <div>
          <BrowserMockup>
          <CodeAnimate 
            value={codeText}     
            checkSpecialLine={(line: string) => ['---'].includes(line)}
            renderSpecialLine={() => <Splitter framework={state.framework} key={'---'} />}
            getKey={getKey}
          />
          </BrowserMockup>
        </div>
      </div>
    </section>
  )
}

export default QuickLook