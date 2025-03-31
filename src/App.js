// App.js
import React from 'react';
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import './App.css'; // Global layout styles

/**
 * App is the root component for our single-page application.
 * It uses the global layout defined in App.css to wrap our modular components.
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
