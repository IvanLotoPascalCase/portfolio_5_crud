import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// DEFAULT VIEW
import Home from './pages/Product';

// DEVELOPING VIEWS
import Product from './pages/Product';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/nav-dev" element={<Navbar />} />
      </Routes>
    </>
  )
}

export default App
