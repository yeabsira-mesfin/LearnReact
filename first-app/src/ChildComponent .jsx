import React from 'react'

const ChildComponent  = React.memo( () => {
    console.log('ChildComponent rendered')
  return (
    <div>Child Component </div>
  )
});

export default ChildComponent 