import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Projects from './Components/Projects/Projects';
import About from './Components/About/About'

function App() {
  return (
    <div className="App"> 

      <header className="App-header">
        <Navbar />        
      </header>
      <About />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
