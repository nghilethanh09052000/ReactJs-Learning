import {useState , useEffect} from 'react'
import Content from './Content.js'

function App() {
 const [info,setInfo] = useState(false)
 


  return (
    <div className="App">
      <button onClick={ ()=> setInfo(!info) }>Toggle</button>
      { info && <Content/> }
      
   
    </div>
  );
}

export default App;
