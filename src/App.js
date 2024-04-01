import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './SideNav';
import PopulationData from './PopulationData';
import CryptoPrices from './CryptoPrices';
import hamburger from "./assets/hamburger.png";
import './App.css';

function App() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Population Data', path: '/population' },
    { name: 'Crypto Prices', path: '/crypto' },
  ];

  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <Router>
      <div className="app-container">
        <SideNav items={navItems} isOpen={isNavOpen} closeNav={closeNav} />
        <button className="hamburger" onClick={toggleNav}>
          <img src={hamburger} alt="Hamburger" />
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/population" element={<PopulationData />} />
          <Route path="/crypto" element={<CryptoPrices />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <PopulationData />
      <CryptoPrices />
    </div>
  );
};

export default App;
