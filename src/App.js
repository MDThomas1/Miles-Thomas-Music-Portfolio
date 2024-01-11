import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Bio from './pages/Bio'
import Discography from './pages/Discography'
import Photos from './pages/Photos'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
