import {useState , useEffect, useRef,memo, useCallback, useMemo, useReducer} from 'react'
import Content from './Content.js'

// useReducer:
// 1. Init state
// 2. Action: Up(state + 1) / Down(state - 1)
// 3. Reducer
// 4. Dispatch

// Init State:
const initState = 0 

// Actions
const UP_ACTION ='up'
const DOWN_ACTION ='down'

// Reducer:
const reducer = (state , action) =>{
  switch(action){
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
    
}

function App() {
  const [count , dispatch] = useReducer(reducer , initState);

  return (
    <div className="App">
      <h4>{count}</h4>
     <button onClick={()=> dispatch(DOWN_ACTION)}>Decrease</button>
     <button onClick={()=> dispatch(UP_ACTION)}>Increase</button>
    </div>
  );
}

export default App;
