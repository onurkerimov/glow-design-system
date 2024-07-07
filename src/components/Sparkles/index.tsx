import './styles.css'
import { useEffect } from 'react'

const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const Sparkles = (props) => {
  useEffect(() => {
    const particles = document.querySelectorAll('.particle')
    particles.forEach((p) => {
      p.setAttribute('style', `
        --x: ${randomIntBetween(20, 80)};
        --y: ${randomIntBetween(20, 80)};
        --duration: ${randomIntBetween(6, 20)};
        --delay: ${randomIntBetween(1, 10)};
        --alpha: ${randomIntBetween(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? randomIntBetween(300, 800) * -1 : randomIntBetween(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? randomIntBetween(300, 800) * -1 : randomIntBetween(300, 800)}%;
        --size: ${randomIntBetween(40, 90) / 100};
      `)
    })
  }, [])
  return (
    <div className="sparkle-button">
      <div className="outer">{props.children}</div>
      <span aria-hidden="true" className="particle-pen">
      {Array.from({length: 30}, (_, s) => s).map((i) => {
          return (
            <svg className="particle" key={i} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        })}
      </span>
    </div>
  )
}

export default Sparkles