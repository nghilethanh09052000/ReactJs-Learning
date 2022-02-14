import {memo} from 'react'

function Content({onIncrease}){
    
    console.log('nghi')
   
    return(
        <div>
            <h1>Nghị</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
        
    )
    
}
export default memo(Content);