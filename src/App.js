import Content from "./Content";
import './App.css'
import {useContext} from 'react'
import {themeContext} from './ThemeContext'

//Context
//CompA => CompC
// *---------------*
// 1. Create Context
// 2. Provider
// 3. Consumer
function App() {
  const context = useContext(themeContext)
 return (
   
          <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <Content/>
          </div>

      
    
  );
}
export default App;