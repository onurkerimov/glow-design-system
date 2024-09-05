import { useEffect, useRef, useState } from 'react';
import Accordion from '../../components/Accordion'
import PlasmaEffect from './PlasmaEffect'
import './styles.css'
import { cx } from 'class-variance-authority'

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Layers = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(!ref.current) return

    const children = ref.current.querySelectorAll(".indicator")
    Array.from(children).forEach((indicator, i) => {
      setTimeout(() => {
        setInterval(() => {
          const x = randomIntFromInterval(-4, 4);
          const y = randomIntFromInterval(-4, 4);
          indicator.style.transform = `translate(${x}px, ${y}px)`;
        }, 900);
      }, i * 300);
    });
  }, [])
  const [layerIndex, setLayerIndex] = useState(0)

  const selectLayer = (i: number) => (e: MouseEvent) => {
    setLayerIndex(i)
    e.stopPropagation()
  }
 useEffect(()=> {
  console.log(layerIndex.toString())

 },[layerIndex] )
  return (
    <div className="planet" ref={ref}>
      <div className="api-layers-container">
        <div className={cx('api-layer layer-3', { active: layerIndex >= 3})} onClick={selectLayer(3)}>
          <div className="indicator secondary">toReactive</div>
          <div className="indicator">reactive</div>
          <div className="indicator tertiary">toAtom</div>
          <div className="legend" style={{ left: 65 }}>
            Layer 3
          </div>
          <div className={cx('api-layer layer-2', { active: layerIndex >= 2})} onClick={selectLayer(2)}>
            <div className="indicator secondary">computed</div>
            <div className="indicator">watch</div>
            <div className="legend">Layer 2</div>
            <div className={cx('api-layer layer-1', { active: layerIndex >= 1})} onClick={selectLayer(1)}>
              <div className="indicator secondary">atom</div>
              <div className="legend" style={{ left: 30 }}>
                Layer 1
              </div>
              <div className={cx('api-layer core', { active: layerIndex >= 0})} onClick={selectLayer(0)}>
                <div className="legend">Core</div>
                <PlasmaEffect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='inner'>
        <h1 className='glow-text'>API Layers</h1>
        <Accordion 
          variant="contained"
          value={layerIndex.toString()}
          onValueChange={(val: string) => setLayerIndex(parseInt(val))}
          items={[
            { 
              id: '1', 
              title: 'Atom (Layer 1)',
              content: (
                <>
                  <code>atom</code> is a robust primitive much like a <b>Redux</b> store.
                  Essentially, the only primitive you need is <code>atom</code>, and the rest of the layers are built on top of it.
                </>
              )
            },
            { 
              id: '2', 
              title: 'Signals (Layer 2)',
              content: (
                <>
                  This layer introduces implicit dependency tracking, similar to the concept of signals. This layer weigh just 0.2 kBs over the first layer.
                </>
              )
            },
            { 
              id: '3', 
              title: 'Proxies (Layer 3)',
              content: (
                <>
                  This layer brings a state management experience similar to <b>MobX</b>, or <b>VueJS</b>. 
                  You can even treat <b>xoid</b> as a proxy-state library and only use <code>reactive</code>, <code>watch</code>, and <code>computed</code>, and never touch <b>atom</b>.
                </>
              )
            },
            { 
              id: '0', 
              title: 'Core',
              content: (
                <>
                  Internal utils that make up <code>atom</code> are exported from the <b>xoid/core</b> route.
                  For 99% of the scenarios, top layers are recommended
                </>
              )
            },
          ]} 
        />
      </div>
    </div>
  )
}

export default Layers


