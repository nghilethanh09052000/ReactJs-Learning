import {useState , useEffect, useRef,memo} from 'react'
import Content from './Content.js'

function App() {
  const [count , setCount] = useState(0);

  const increase =()=>{
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Content/>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>

    </div>
  );
}

export default App;
