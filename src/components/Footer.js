// src/components/Footer.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../theme';

/* Button animation for an engaging call-to-action */
const buttonPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const FooterWrapper = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
`;

const OrderButton = styled.a`
  display: inline-block;
  background: ${colors.tanGold};
  color: #000;
  font-weight: bold;
  padding: 1rem 2rem;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${colors.darkTanGold};
    color: #fff;
    animation: ${buttonPulse} 1s ease;
  }
`;

const PhoneLink = styled.a`
  display: inline-block;
  color: ${colors.tanGold};
  font-size: 1.1rem;
  margin-top: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

/**
 * Footer provides a call-to-action and contact information.
 * The interactive Order button and clickable phone link enhance the user experience.
 */
function Footer() {
  return (
    <FooterWrapper>
      <OrderButton href="#order">Order Now</OrderButton>
      <br />
      <PhoneLink href="tel:+254712345987">+254 712 345 987</PhoneLink>
    </FooterWrapper>
  );
}

export default React.memo(Footer);
