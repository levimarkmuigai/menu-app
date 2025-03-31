// App.js
import React from 'react';
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import './App.css';

/**
 * App is the root component that composes the overall interactive layout.
 * It demonstrates a clean separation of concerns—global styles are defined in App.css,
 * and each UI section is encapsulated in its own component.
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
