import './App.css';
import { useState } from 'react';
import { useTransition, animated as a } from '@react-spring/web'; // use "a" alias for "animated"

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const transitions = useTransition(isVisible, {
    from: { opacity: 0, transform: 'scale(0) rotate(0deg)'},
    enter: { opacity: 1, transform: 'scale(1) rotate(360deg)' },
    leave: { opacity: 1, transform: 'scale(0.5) rotate(180deg)' },
  });

  return (
    <>
      <h2>My react-spring demo</h2>
      <button onClick={() => setIsVisible(v => !v)}>Mount / Unmount Component</button>
      <div>
        {transitions((style, item) =>
          item ? <a.div style={style} className='item' /> : null
        )}
      </div>
    </>
  );
}

export default App;

// andrea - A V 

