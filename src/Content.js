import { useEffect, useState } from "react";

const lessons = [
                { 
                    name:'ReactJS là gì? Tại sao nên học ReactJS',
                    id:1
                },
               {
                   name:'SPA/MPA là gì?',
                    id:2
                },
                {
                    name:'Arrow function',
                    id:3
                },
            ]
function Content(){
    const [lessonId , setLessonId] = useState(1);

    useEffect( ()=>{
        const handleComment = ({detail}) =>{
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
        
    },[lessonId])
   
    return(
        <div>
         <ul>
             {lessons.map(lesson=>(
                 <li
                    key={lesson.id}
                    style={{
                        color:lessonId === lesson.id ? 
                        'red' : '#333'
                    }}
                    onClick={()=>setLessonId(lesson.id)}
                 >
                        {lesson.name}
                 </li>
             ))}
         </ul>
       
        </div>
        
    )
    
}
export default Content;