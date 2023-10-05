import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// DEFAULT VIEW
import Home from './pages/Home';

// DEVELOPING VIEWS
import Product from './pages/Product';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Andres" element={<Footer />} />
      </Routes>
    </>
  )
}

export default App
