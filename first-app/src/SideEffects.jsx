import { response } from 'express';
import React, {useState, useEffect} from 'react'

const SideEffects = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false)
        })
    }, []); 

    if(loading){
        return <div><h1>Loading...</h1></div>
    }
  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default SideEffects