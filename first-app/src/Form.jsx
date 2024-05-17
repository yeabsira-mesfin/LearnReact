import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(` Name: ${name} \n Email: ${email}`)
    }
    
  return (
    <div>
        <h1>Sign Up Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">
                    Name:
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form