import '../public/global.css'
import './glow.css'
import './core'

import HeaderHero from './sections/HeaderHero'
import QuickLook from './sections/QuickLook'
import FrameworksSection from './sections/FrameworksSection'
import Prism from 'prismjs';
import Layers from './sections/Layers'
import FeaturesSection from './sections/FeaturesSection'
import CopyButton from './components/CopyButton'
import { useState } from 'react'

const CodeBlock = (props: { children: any }) => {
  const value = props.children
  const grammar = Prism.languages.jsx
  const language = 'javascript'
  const html = Prism.highlight(value, grammar, language)
  return <div className='relative'>
    <Copier content={value} />
    <code className='codeblock' dangerouslySetInnerHTML={{ __html: html }} />
  </div>
}

const snippets = [
  `import { atom } from 'xoid'

const $count = atom(3)

$count.set(5)
$count.update((state) => state + 1)
console.log($count.value) // 6`,

`import { atom } from 'xoid'

const $count = atom(3, (atom) => ({
  increment: () => atom.update((s) => s + 1),
  incrementBy: (by) => atom.update((s) => s + by)
}))

$count.actions.incrementBy(5)`,

`import { atom } from 'xoid'

const $doubleCount = atom((get) => get($count) * 2)

const $tripleCount = $count.map((state) => state * 3)`,

`import { atom } from 'xoid'
import { useAtom } from '@xoid/react'

// in a component
const count = useAtom($count)
// vanilla JavaScript
const unsubscribe = $count.subscribe(console.log)`,

`import { atom } from 'xoid'

const $atom = atom({ foo: { bar: { baz: 5 } } })

const $baz = $atom.focus((s) => s.foo.bar.baz)
$baz.update((s) => s + 1)

const newValue = $atom.value
assert(newValue.foo.bar.baz === 6) // ✅
`,
`import { atom } from 'xoid'

const red = { color: '#f00', onClick: () => machine.set(green) }
const green = { color: '#0f0', onClick: () => machine.set(red) }
const $machine = atom(red)

// in a component
const { color, onClick } = useAtom($machine)
return <div style={{ color }} onClick={onClick}/>`
]

const copyContent = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function Copier(props: { children: any }) {
  const [isActive, setIsActive] = useState(false)
  
  const copy = () => {
    setIsActive(true)
    copyContent(props.content)
  }

  return <button className='copy-wrapper' onClick={copy}>
    <CopyButton isActive={isActive} setIsActive={setIsActive} />
  </button>
}

function App() {
  return (
    <>
      <div className="first-sections">
        <HeaderHero />
        <QuickLook />
        <FrameworksSection />
        <FeaturesSection />
      </div>
      <div className="tutorial">
        {/* <section>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

          </div>
        </section> */}
        <section>
          <div>
            <div className='first-column'>
              <h1 className="glow-text">
                Sensible primitives
              </h1>
              <p>
                <strong>xoid</strong> is based on <em>atoms</em>. 
                Atoms are holders of state. <code>atom</code> function is used to create them.
              </p>
            </div>
            <div className='second-column'>
              <CodeBlock>{snippets[0]}</CodeBlock>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <div className='first-column'>
              <h1 className="glow-text">
                Actions
              </h1>
              <p>
                With the second argument, you can define actions for your atoms.
              </p>
            </div>
            <div className='second-column'>
              <CodeBlock>{snippets[1]}</CodeBlock>
            </div>
          </div>
        </section> */}
        <section>
          <div>
            <div className='first-column'>
              <h1 className="glow-text">
                Computed values
              </h1>
              <p>
                It has a Recoil-inspired API for derived atoms. Alternatively, the <code>.map</code> method can be used.
              </p>
            </div>
            <div className='second-column'>
              <CodeBlock>{snippets[2]}</CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className='first-column'>
              <h1 className="glow-text">
                Framework integrations
              </h1>
              <p>
                <b>xoid</b> has <b>React</b>, <b>Vue</b>, and <b>Svelte</b> integrations. They all have the same interface. It can be used without any framework as well.
              </p>
            </div>
            <div className='second-column'>
              <CodeBlock>{snippets[3]}</CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className='first-column'>
              <h1 className="glow-text">
                No more hand-written reducers!
              </h1>
              <p>
              With <code>.focus</code> method, you can "surgically" set state of a focused branch. Changes will propagate to the root in an immutable manner.
              </p>
            </div>
            <div className='second-column'>
              <CodeBlock>{snippets[4]}</CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className='first-column'>
              <h1 className="glow-text">
                Finite state machines without hassle
              </h1>
              <p>
                Atoms are potent primitives. No additional syntax is required for expressing finite state machines.
              </p>
            </div>
            <div className='second-column'>
              <CodeBlock>{snippets[5]}</CodeBlock>
            </div>
          </div>
        </section>
        {/* <div className='vignette'></div> */}
      <Layers />
      </div>
      <section className='selling-points'>
        <div>
          <ul>
            <li>Easy to learn</li>
            <li>Small bundle size</li>
            <li>Zero configuration</li>
            <li>Framework-agnostic</li>
            <li>Computed values</li>
            <li>Async actions</li>
            <li>Transient updates</li>
            <li>Local &amp; global state</li>
            <li>Finite state machines</li>
            <li>Extensive Typescript support</li>
            <li>Devtools</li>
          </ul>
          {/* <ul>
            <li>.value</li>
            <li>.get</li>
            <li>.set</li>
            <li>.update</li>
            <li>.subscribe</li>
            <li>.focus</li>
            <li>.map</li>
            <li>.filter</li>
          </ul> */}
          {/* <ul>
            <li>inject</li>
            <li>effect</li>
            <li>watchEffect</li>
          </ul> */}
        </div>
      </section>
    </>
  )
}

export default App
