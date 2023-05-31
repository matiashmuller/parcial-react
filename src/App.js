import './App.css';
import Footer from './components/Footer';
import Home from './components/Home'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/parcial-react" element={<Home />} />
        <Route path="/parcial-react/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
