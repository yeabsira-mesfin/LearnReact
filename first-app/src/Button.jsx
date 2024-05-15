import React,{useState} from 'react'

const Button = () => {
    const [theme, setTheme] = useState('blue');

    const toggleTheme = () => {
        setTheme((preTheme) => (preTheme) === 'blue' ? 'red': 'blue')
    }
    
    const styles = {
        backgroundColor: theme ==='blue' ? 'red': 'blue',
        color: theme === 'blue' ? 'blue' : 'red',
        margin: 'auto',
        padding: '29px',
        textAlign: 'center',
        width:'200px',
       
        
    };
  return (
    <div style={styles}>
        <p>
            This is the color 
        </p>
        <button onClick={toggleTheme}>Click to change.</button>
    </div>
  )
}

export default Button