import React from 'react'

const WelcomeF = (props) => {
  const style = {
    margin: '20px'
  }
  return (
    <div style={style}>
     <h1>Welcome, {props.name}</h1>
     <p>I have the ID: {props.id}</p>
    </div>
  )
}

export default WelcomeF