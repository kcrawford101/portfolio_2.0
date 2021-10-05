import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">

      <header className="App-header">
        <Navbar />        
      </header>
      </div>

      <Footer />
    </div>
  );
}

export default App;
