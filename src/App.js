import {useState , useEffect, useRef,memo, useCallback} from 'react'
import Content from './Content.js'

function App() {
  const [count , setCount] = useState(0);

  const handleIncrease =useCallback(()=>{
    setCount(prevCount => prevCount + 1)
  },[])

  return (
    <div className="App">
      <Content
          onIncrease ={handleIncrease}
      />
      <h1>{count}</h1>
      

    </div>
  );
}

export default App;
