import './glow.css'
import './App.css'
import ToggleGroupDemo from './components/ToggleGroup'
import reactSvg from './assets/react.svg'
import vueSvg from './assets/vue.svg'

const syncPointer = ({ x, y }) => {
  document.documentElement.style.setProperty('--x', x.toFixed(2))
  document.documentElement.style.setProperty(
    '--xp',
    (x / window.innerWidth).toFixed(2)
  )
  document.documentElement.style.setProperty('--y', y.toFixed(2))
  document.documentElement.style.setProperty(
    '--yp',
    (y / window.innerHeight).toFixed(2)
  )
}
document.body.addEventListener('pointermove', syncPointer)

function App() {
  return (
    <>
    <h1 style={{color: 'var(--foreground)' }}>
      <span className='glow-text'>Framework-agnostic</span><br/>
      state management library</h1>
      <div style={{margin: 20}}>
        <ToggleGroupDemo />
      </div>
      <div className='astro-pride'/>
      <img src={reactSvg}></img>
      <div className='adana'>
      <img src={vueSvg}></img>
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
