import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'


const Page = ({ offset, image, onClick, title}) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>
    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div style={{ backgroundImage: `url(${image})`,
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                  }} className={styles.slopeEnd} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>{title}</span>
    </ParallaxLayer>
  </>
)

export default function App() {
  const parallax = useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
        <Page offset={0} image="/flower.jpg" onClick={() => scroll(1)} title={'flowers'} />
        <Page offset={1} image="/lilly.jpg" onClick={() => scroll(2)} title={' Lillies'} />
        <Page offset={2} image="/otter.jpg" onClick={() => scroll(0)} title={'Otters'} />
        <ParallaxLayer sticky={{ start: 0 , end: 1 }} offset={1} className={`${styles.sticky} ${styles.number}`}>
          <p>{'sticky!'}</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
