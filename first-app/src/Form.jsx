import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Email: ${email}`)
    }
  return (
    <div>Form</div>
  )
}

export default Form