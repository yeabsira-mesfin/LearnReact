import React from 'react'

const WelcomeF = (props) => {
  return (
    <div>
     <h1>Welcome, {props.name}</h1>
     <p>I have the ID: {props.id}</p>
    </div>
  )
}

export default WelcomeF