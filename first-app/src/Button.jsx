import React,{useState} from 'react'

const Button = () => {
    const [theme, setTheme] = useState('green');

    const toggleTheme = () => {
        setTheme((preTheme) => (preTheme) === 'green' ? 'red': 'green')
    }
    
    const styles = {
        backgroundColor: theme ==='green' ? 'red': 'green',
        color: theme === 'green' ? 'green' : 'red',
        padding: '29px',
        textAlign: 'center'
        
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