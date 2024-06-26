import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
     const increment = () => {
        setCount(count + 1)
     }
     const style  = {
      margin:'20px'
     }
  return (
    <div style={style}>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter