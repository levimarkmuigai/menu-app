// src/components/Header.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../theme';
import elephantImage from '../assets/elephant.jpg';

/* Fade-in animation for smooth introduction */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Banner = styled.header`
  background: ${colors.lightGray};
  padding: 2rem 1rem;
  text-align: center;
  overflow: hidden;
  position: relative;
  animation: ${fadeIn} 1s ease-out;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

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

const ElephantImage = styled.img`
  max-width: 180px;
  margin: 0 auto 1rem;
  display: block;
  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

/**
 * Header component represents the interactive banner.
 * It includes the logo, an elephant silhouette, and a tagline.
 */
function Header() {
  return (
    <Banner>
      <Logo>My HCI Showcase</Logo>
      <ElephantImage src={elephantImage} alt="Elephant Silhouette" />
      <Tagline>Crafting engaging experiences through human-centered design</Tagline>
    </Banner>
  );
}

export default React.memo(Header);
