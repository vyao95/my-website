import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Landing from './components/landing.js';
import About from './components/about.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import chevronUp from './assets/chevron-up-outline.svg';

class App extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll = e => {
    if(!this.scrollUpBtn) return;
    const bottom = ReactDOM.findDOMNode(this.refs['landing']).getBoundingClientRect().bottom;
    if(bottom <= window.innerHeight/2) {
      this.scrollUpBtn.classList.add('visible');
    } else {
      this.scrollUpBtn.classList.remove('visible');
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div className="App">
        <Landing ref="landing" />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <a href="#landing" ref={el => {this.scrollUpBtn = el}} className="scroll-up-btn">
          <ion-icon id="back-to-top" src={chevronUp}></ion-icon>
        </a>
      </div>
    );
  }
}

export default App;
