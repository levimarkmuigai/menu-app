// src/components/Header.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../theme';
import buffaloImage from '../assets/buffalo.jpg';

/* Fade-in animation for smooth appearance */
// Good use of keyframes for a subtle fade-in effect. This adds a polished touch to the UI.
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* Banner using the buffalo image as a background */
// The Banner component is well-structured and leverages styled-components effectively.
// Consider making the height dynamic (e.g., using a prop) for more flexibility across different pages.
const Banner = styled.header`
  position: relative;
  width: 100%;
  height: 60vh; /* Adjust height for better responsiveness */
  background-image: url(${buffaloImage}); // Nice use of a background image for visual appeal.
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  animation: ${fadeIn} 1s ease-out; // Smooth animation enhances user experience.
`;

/* Logo styling */
// The Logo component is clean and readable. The text-shadow is a nice touch for contrast.
// Consider making the font size and color configurable via props for reusability.
const Logo = styled.div`
  font-size: 2.5rem; /* Slightly larger for emphasis */
  font-weight: 700;
  color: ${colors.primary}; // Good use of theme colors for consistency.
  margin-bottom: 1rem; /* Add spacing below the logo */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add subtle text shadow for better readability */
`;

/**
 * Header component with improved layout and spacing for aesthetic appeal.
 * 
 * Pros:
 * - Clean and modular design using styled-components.
 * - Good use of animations and theme-based styling.
 * - Memoization with React.memo is a nice optimization for preventing unnecessary re-renders.
 * 
 * Suggestions:
 * - The inline style for the Logo's position could be moved to the styled-component for consistency.
 * - Consider adding accessibility features, such as ARIA roles or alt text for the background image.
 * - If the Header is reused across multiple pages, allow customization via props (e.g., dynamic text or background).
 */
function Header() {
  return (
    <Banner>
      {/* Inline styles for positioning could be moved to the styled-component for better maintainability */}
      <Logo style={{ position: 'absolute', top: '1rem', left: '1rem' }}>Menu</Logo>
    </Banner>
  );
}

// React.memo is a good choice here to optimize rendering for a static header component.
export default React.memo(Header);
