// src/components/Header.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../theme';
import buffaloImage from '../assets/buffalo.jpg';
import logoImage from '../assets/logo.jpg'; // New logo asset

// Fade-in animation for a smooth appearance
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Banner using the buffalo image as the background
const Banner = styled.header`
  position: relative;
  width: 100%;
  height: 60vh; /* Adjust the height as needed */
  background-image: url(${buffaloImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  animation: ${fadeIn} 1s ease-out;
`;

// TopBar for placing the logo next to the menu text in the top left corner
const TopBar = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
`;

// LogoImage displays the logo icon
const LogoImage = styled.img`
  width: 50px;   /* Adjust size as needed */
  height: auto;
  margin-right: 0.5rem;
`;

// LogoText displays the text "Menu" next to the logo icon
const LogoText = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

// Tagline centered in the banner
const Tagline = styled.h2`
  font-size: 1.2rem;
  color: ${colors.text};
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeIn} 1.5s ease-out;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/**
 * Header component displays a background image with a top bar that includes a logo (image + text)
 * next to the "Menu" label. The tagline is centered within the banner.
 */
function Header() {
  return (
    <Banner>
      <TopBar>
        <LogoImage src={logoImage} alt="Logo" />
        <LogoText>Menu</LogoText>
      </TopBar>
    </Banner>
  );
}

export default React.memo(Header);
