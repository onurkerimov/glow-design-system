import './glow.css'
import './App.css'
import ToggleGroup from './components/ToggleGroup'
import RadioGroup from './components/RadioGroup'
import Accordion from './components/Accordion'
import reactSvg from './assets/react.svg'
import vueSvg from './assets/vue.svg'
import './core'
function App() {
  return (
    <>
    <h1 style={{color: 'var(--foreground)' }}>
      <span className='glow-text'>Framework-agnostic</span><br/>
      state management library</h1>
      <div style={{margin: 20}}>
        <ToggleGroup type='multiple' options={['react', 'vue', 'svelte']}/>
      </div>
      <div style={{margin: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px'}}>
        <RadioGroup options={['react', 'vue', 'svelte']}/>
        <RadioGroup options={['local', 'global']}/>
        <RadioGroup options={['low', 'medium', 'high', 'highest']}/>
      </div>
      <div className='astro-pride'/>
      <img src={reactSvg}></img>
      <div style={{margin: 20}}>
      <Accordion />
      </div>
      <div style={{margin: 20}}>
      <Accordion variant='contained' />
      </div>
      <main>
        <article className='glow-borders glow-inner'>
          <div className='glow-outer' />
          <div className='glow-text'>
            <div style={{ padding: '0 24px' }}>
              <h2>Title</h2>
              <p>Description</p>
            </div>
            <div className='glow-hr'/>
            <div style={{ padding: '0 24px' }}>
              <p>Description</p>
            </div>
          </div>
        </article>
        <article className='glow-borders glow-inner'>
          <div className='glow-outer' />
          <div className='glow-text'>
            <div style={{ padding: '0 24px' }}>
              <h2>Title</h2>
              <p>Description</p>
            </div>
            <div className='glow-hr'/>
            <div style={{ padding: '0 24px' }}>
              <p>Description</p>
            </div>
          </div>
        </article>
        <article className='glow-borders glow-inner'>
          <div className='glow-outer' />
          <div className='glow-text'>
            <div style={{ padding: '0 24px' }}>
              <h2>Title</h2>
              <p>Description</p>
            </div>
            <div className='glow-hr'/>
            <div style={{ padding: '0 24px' }}>
              <p>Description</p>
            </div>
          </div>
        </article>
        <article data-glow>
        </article>
      </main>
    </>
  )
}

export default App
