import { createConnection } from 'mongoose'
import React,{createContext,useState} from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme)==='light'? 'dark':'light')
  };

  return (
    <div>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export {ThemeContext,ThemeProvider}