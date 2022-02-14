import {useState , useEffect, useRef} from 'react'
import Content from './Content.js'

function App() {
  const [count , setCount] = useState(60);

  let timerId = useRef()
  const handleStart =()=>{
    timerId.current = setInterval(() =>{
      setCount(prevState => prevState -1 )
 
    },1000)
  }
  const handleStop =()=>{
    clearInterval(timerId.current)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
