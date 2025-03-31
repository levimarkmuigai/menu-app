// src/App.js
import React from 'react';
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import './App.css';

/**
 * App is the root component that lays out the page.
 * Global styles are in App.css while each section is modularized.
 */
function App() {
  return (
    <div className="app-container">
      <Header />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;
