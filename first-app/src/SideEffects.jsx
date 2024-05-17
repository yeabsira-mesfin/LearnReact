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
  return (
    <div>SideEffects</div>
  )
}

export default SideEffects