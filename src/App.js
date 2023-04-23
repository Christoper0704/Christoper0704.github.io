import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, About, Skill, Project, Contact } from './Components'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <About />
        <Skill />
        <Project />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App