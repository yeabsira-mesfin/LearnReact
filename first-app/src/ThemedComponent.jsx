import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemedComponent = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: theme === 'light' ? '#fff':'#333',
    color: theme === 'light' ? '#000': '#fff',
    padding: '20px',
    textAlign: 'center',
    minHeight: '10vh',
    
  };

  return (
    <div style={themeStyles}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemedComponent