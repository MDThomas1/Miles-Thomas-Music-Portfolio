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
      <Router>
        <Header />
        <Navbar />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Bio' element={<Bio />} />
            <Route path='/Discography' element={<Discography />} />
            <Route path='/Photos' element={<Photos />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
