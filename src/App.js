import './App.css';
import { useState } from 'react';
import Menu from './menu.js';
import Home from './home.js';
import Academics from './academics';
import Projects from './Projects';
import Skills from './Skills';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        
        <Router>
          <Menu />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Academics' element={<Academics/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/Skills' element={<Skills/>} />
          </Routes>
        </Router>

      </div>
  );
}

export default App;
