import {useState} from 'react'
import { useTransition, animated as a } from '@react-spring/web';

export default function UseTrainition() {
  const [isVisible, setIsVisible] = useState(false);
  const transitions = useTransition(isVisible, {
    from: { opacity: 0, transform: 'scale(0) rotate(0deg)'},
    enter: { opacity: 1, transform: 'scale(1) rotate(360deg)' },
    leave: { opacity: 1, transform: 'scale(0.5) rotate(180deg)' },
  });


  return (
    <div>      
      <button onClick={() => setIsVisible(v => !v)}>Mount / Unmount Component</button>
      <div>
        {transitions((style, item) =>
          item ? <a.div style={style} className='item' /> : null
        )}
      </div></div>
  )
}
