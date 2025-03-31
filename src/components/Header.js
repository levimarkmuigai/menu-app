// components/Header.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../theme';

/* Banner styling with a fade-in animation for an engaging first impression */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Banner = styled.header`
  background: ${colors.lightGray || '#f5f5f5'};
  padding: 2rem 1rem;
  text-align: center;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${colors.primary || '#333'};
  margin-bottom: 1rem;
`;

const Tagline = styled.h2`
  font-size: 1.2rem;
  color: ${colors.text || '#333'};
  margin: 0 auto;
  max-width: 600px;
  animation: ${fadeIn} 1.5s ease-out;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/**
 * Header component demonstrates an interactive banner.
 * The tagline fades in, providing a smooth visual transition.
 */
function Header() {
  return (
    <Banner>
      <Logo>My HCI Showcase</Logo>
      <Tagline>Crafting engaging experiences through human-centered design</Tagline>
    </Banner>
  );
}

export default React.memo(Header);
