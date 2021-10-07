import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">   

      <header className="App-header">
        <Navbar />        
      </header>
      <Projects />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
