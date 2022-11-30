import React from 'react';
import videoBg from './assets/purp.mp4';
import { Routes, Route } from 'react-router-dom';
import { Hero, About, Gallery, Contact, Product } from './container';
import { Navbar } from './components';
import './styles/App.css';

const App = () => {
  return (
    <div className="main">
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted className="video" />

      <div className="main-content">
        <div
          className="navbar"
          style={{ maxWidth: { sx: 'auto', md: '1280px' } }}
        >
          <Navbar />
        </div>

        <div className="main-hero">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
