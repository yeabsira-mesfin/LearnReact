import logo from './logo.svg';
import './App.css';
import WelcomeF from './WelcomeF';
import Counter from './Counter';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';
import Button from './Button';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Form from './Form';
// import SideEffects from './SideEffects';
import SyledContainer from './SyledContainer';
function App() {
  const value = 'This is the context value';
  return (
    <div className="App">
      {/* <ThemeProvider>
        <ThemedComponent/>
      </ThemeProvider>

      <WelcomeF name= "Yeab" id="29"/>
     <Counter/>
     <Button/>
     <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </Router>
      <Form/> */}
      {/* <SideEffects/> */}
      <SyledContainer/>
      <h1>Hello, Testing!</h1>
    </div>
  );
}

export default App;
