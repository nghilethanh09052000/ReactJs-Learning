import { useEffect, useState } from "react";

const tabs = ['posts','comments','albums']
function Content(){
    //useEffect(callback,[deps])
    const [posts , setPosts] = useState([]);
    const [type , setType] = useState('posts');
    const [showGoToTop , setShowGoToTop] = useState(false)
    const [width , setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        console.log(type)
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res =>res.json())
        .then(posts =>{
            setPosts(posts)
        })
    }, [type])

    useEffect(()=>{
        const handleScroll = () =>{
            setShowGoToTop(window.scrollY >= 200)
        }   
       window.addEventListener('scroll',handleScroll)
       // Cleanup function
       return () =>{
        window.removeEventListener('scroll',handleScroll) 
       }
    }, [])
    
    useEffect(()=>{
        const handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
    },[])
    return(
        <div>
            <h1>{width}</h1>
            {tabs.map(tab=>(
                <button 
                key={tab}
                style={type===tab ? {
                    color:'#fff',
                    backgroundColor:'000',
                } :{}}
                onClick={()=> setType(tab)}
                >{tab}
                </button>
            ))}
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
                {showGoToTop && (
                    <button
                        style={{
                            position:'fixed',
                            right:20,
                            bottom:20
                        }}
                        >
                        Go to Top
                    </button>
                )}
            </ul>
        </div>
        
    )
    
}
export default Content;