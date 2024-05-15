import logo from './logo.svg';
import './App.css';
import WelcomeF from './WelcomeF';
import Counter from './Counter';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';
import Button from './Button';


function App() {
  const value = 'This is the context value';
  return (
    <div className="App">
      <ThemeProvider>
        <ThemedComponent/>
      </ThemeProvider>
     <WelcomeF name= "Yeab" id="29"/>
     <Counter/>
     <Button/>
    </div>
  );
}

export default App;
