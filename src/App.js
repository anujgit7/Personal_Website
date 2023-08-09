import './App.css';
import { useState } from 'react';
import Menu from './menu.js';
import Home from './home.js';
import Academics from './academics';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        
        <Router>
          <Menu />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Academics' element={<Academics/>} />
          </Routes>
        </Router>

      </div>
  );
}

export default App;
