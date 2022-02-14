import {useState , useEffect, useRef,memo, useCallback, useMemo} from 'react'
import Content from './Content.js'

function App() {
  const [name , setName] = useState('');
  const [price , setPrice] = useState('');
  const [products , setProducts] = useState([]);
  const nameRef = useRef()

  const handleSubmit =()=>{
    setProducts([
      ...products,{
        name,
        price: parseInt(price)
      }])
      setName('')
      setPrice('')
      nameRef.current.focus()
  }
  const total = useMemo( ()=>{
   const result = products.reduce( (result , product) =>{
        console.log('Tính toán lại')
        return result + product.price
   },0) 

  return result
  },[products])
  return (
    <div className="App">
      <input
          ref={nameRef}
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='Enter name..' 
      />
      <br />
       <input
          value={price}
          type='Number'
          onChange={(e)=>setPrice(e.target.value)}
          placeholder='Enter price..' 
      />
        <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <h4>{total}</h4>
      <ul>
        {products.map( (product,index)=>(
          <li key={index}>{product.name} - {product.price} </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
