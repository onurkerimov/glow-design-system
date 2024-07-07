import '../public/global.css'
import './glow.css'
import './core'
import HeaderHero from './sections/HeaderHero'
import QuickLook from './sections/QuickLook'
import CopyButton from './components/CopyButton'
import FrameworksSection from './sections/FrameworksSection'

function App() {
  return (
    <>
      <div className="first-sections">
        <HeaderHero />
        <QuickLook />
      </div>
      <FrameworksSection />
    </>
  )
}

export default App
