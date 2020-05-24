import React from 'react';
import './App.css';

import Landing from './components/landing.js';
import About from './components/about.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
