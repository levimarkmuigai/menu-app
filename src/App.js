import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from './theme'; // theme contains our color palette
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';

// ==========================================================
// SinglePageContainer: Container for the entire layout
// ==========================================================
const SinglePageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #000;
  background-color: #fff;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

// ==========================================================
// Banner Section (if used inside Header component)
// ==========================================================
const Banner = styled.header`
  background: ${colors.lightGray || '#f5f5f5'}; /* Use theme color if available */
  position: relative;
  text-align: center;
  padding: 2rem 1rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

// ==========================================================
// LogoPlaceholder: Used for displaying a temporary logo
// ==========================================================
const LogoPlaceholder = styled.div`
  /* If this element is meant to be absolute, remove the "position: static" below */
  position: static; /* Changed from absolute to static for mobile layout consistency */
  background: ${colors.tanGold || '#d2b48c'};
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 1rem;
`;

// ==========================================================
// Elephant: An image component for the elephant silhouette
// ==========================================================
const Elephant = styled.img`
  max-width: 180px;
  margin: 0 auto 1rem;
  display: block;

  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

// ==========================================================
// Tagline: Displays a headline or slogan
// ==========================================================
const Tagline = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 1rem auto 0;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// ==========================================================
// ProductCard: Card for a single product
// ==========================================================
const ProductCard = styled.div`
  background: #fff;
  width: 250px;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`;

// ==========================================================
// PlateImage: Image representing the product on a circular plate
// ==========================================================
const PlateImage = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// ==========================================================
// ProductName: The product title/name
// ==========================================================
const ProductName = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
`;

// ==========================================================
// PriceBadge: A circular badge showing product price
// ==========================================================
const PriceBadge = styled.div`
  background: ${colors.tanGold || '#d2b48c'};
  color: #000;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${colors.darkTanGold || '#c9a671'};
    color: #fff;
  }
`;

// ==========================================================
// FooterSection: Footer container with call-to-action styles
// ==========================================================
const FooterSection = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
`;

// ==========================================================
// ButtonHover: Animation for button hover effect
// ==========================================================
const ButtonHover = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// ==========================================================
// OrderButton: CTA button style
// ==========================================================
const OrderButton = styled.a`
  display: inline-block;
  background: ${colors.tanGold || '#d2b48c'};
  color: #000;
  font-weight: bold;
  padding: 1rem 2rem;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${colors.darkTanGold || '#c9a671'};
    color: #fff;
    animation: ${ButtonHover} 1s ease;
  }
`;

// ==========================================================
// PhoneNumber: Styled phone number link (click-to-call)
// ==========================================================
const PhoneNumber = styled.a`
  display: inline-block;
  color: ${colors.tanGold || '#d2b48c'};
  font-size: 1.1rem;
  margin-top: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

// ==========================================================
// Main App Component
// ==========================================================
export default function App() {
  return (
    <SinglePageContainer>
      {/* The Header, ProductsSection, and Footer are imported components.
          They should be optimized individually if needed */}
      <Header />
      <ProductsSection />
      <Footer />
    </SinglePageContainer>
  );
}
