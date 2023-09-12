import { animated, useSpring, useSpringRef } from '@react-spring/web'

export default function MyComponent({isAnimated}) {
  const api = useSpringRef()

  const props = useSpring({
    ref: api,
    from: {  opacity: 0, transform: 'scale(0.5)', color: 'red' },
    to: { opacity: isAnimated ? 1 : 0, transform: isAnimated ? 'scale(1)' : 'scale(0.5)', color: 'blue' },
    delay: 200,
    config: { tension: 250, friction: 40 }
  })
  console.log(props)
  api.start()

  return <animated.div style={props} className={'world'}>Hello World</animated.div>
}