import { animated, useSpringRef, useTrail, useChain, useSpring } from '@react-spring/web';
import {useRef} from 'react'

export default function UseChainHook() {
  const springRef = useSpringRef()
  const trailRef = useRef()

  const springProp = useSpring({
    ref: springRef,
    from: {opacity: 0},
    to: {opacity: 1}
  })

  const items = [0, 1, 2];
  const trailProps = useTrail(items.length, {
    ref: trailRef,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  useChain([springRef, trailRef])

  return (
    <div>
      <animated.div style={springProp}>I will fade in first.</animated.div>
      {trailProps.map((props, index) => (
        <animated.div key={index} style={props}>
          I am item {index + 1}
        </animated.div>
      ))}
    </div>
  )
}
