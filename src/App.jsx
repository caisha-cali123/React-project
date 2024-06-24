//App.jsx
import React, { useState } from 'react';
import Todo from './components/Todo';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoDisplay from './components/TodoDisplay';
import Navbar from './components/Navbar';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  

  return (

    <Router>
      
    <div>
      <Navbar/>
 <Routes>
  
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/service" element={<Service/>}/>

  
 </Routes>
    </div>

    </Router>
  );
}

export default App;
