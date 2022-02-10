import {useState} from 'react'

const courses = [
  {
    id:1,
    name:'HTML, CSS'
  },
  {
    id:2,
    name:'Javascript'
  },
  {
    id:3,
    name:'ReactJs'
  },

]
function App() {
                     {/* Radio: */}
  // const [checked , setChecked] = useState();
  // const handleSubmit =()=>{
  //   console.log({
  //     id:checked
  //   })
  // }
                        {/* Checkbox: */}
    const [checked , setChecked] = useState([]);
    const handleCheck = (id) =>{
      setChecked(prev => {
        const isChecked = checked.includes(id);
        if(isChecked){
          return checked.filter(item => item !==id)
        }else{
          return [...prev,id]
        }
      
      })
     
     
    }
    const handleSubmit = () =>{
      console.log({
        ids:checked
      })
    }
  return (
    <div className="App">
                        {/* Radio: */}
    {/* {courses.map(course => (
      <div key={course.id}>
        <input 
          type="radio"
          onChange={()=>setChecked(course.id) }
          checked={checked===course.id}
          /> 
        {course.name}
      </div>
    ))} */}
                          {/* Checkbox: */}
    {courses.map(course => (
      <div key={course.id}>
        <input 
          type="checkbox"
          onChange={()=> handleCheck(course.id) }
          checked={checked.includes(course.id)}
          /> 
        {course.name}
      </div>
    ))}
    <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
