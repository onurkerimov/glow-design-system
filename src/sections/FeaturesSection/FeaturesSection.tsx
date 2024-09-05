import './styles.css'

const FeaturesSection = () => {
  return (
    <section className='features-section'>
       <div>
        <div className='feature'>
          <div>
            <div className='img'>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-theme="dark"
                focusable="false"
               
                height="1.1em"
                width="1.1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1={12} y1="22.08" x2={12} y2={12} />
              </svg>
            </div>
            <div>
              <h1 className='glow-text'>Simple</h1>
              <p>
                <b>xoid</b> was designed to be easy to learn, yet it's extremely flexible. 
                Follow through to learn it!
              </p>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div>
            <div className='img'>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-theme="dark"
                focusable="false"
               
                height="1.1em"
                width="1.1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div>
              <h1 className='glow-text'>Tiny</h1>
              <p>
                It has no external dependencies, and nicely tree-shakeable. Whole library weighs around 1.2kB.
              </p>
            </div>
          </div>
        </div>
        <div className='feature'>
          <div>
            <div className='img'>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-theme="dark"
                focusable="false"
               
                height="1.1em"
                width="1.1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <h1 className='glow-text'>Robust</h1>
              <p>
                It's based on immutable updates and explicit subscriptions. This makes
                it ideal for teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection