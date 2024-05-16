import logo from './logo.svg';
import './App.css';
import WelcomeF from './WelcomeF';
import Counter from './Counter';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';
import Button from './Button';
import {BroserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


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
