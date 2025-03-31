import React from 'react';
import styled, { keyframes } from 'styled-components';

// ========== ASSET IMPORTS (Update paths as needed) ==========
import ElephantImg from './assets/elephant.png';
import FriedBeansImg from './assets/beans-fried.png';
import BoiledBeansImg from './assets/beans-boiled.png';

// ========== STYLED COMPONENTS ==========

// Container for the entire single-page layout
const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #000;
  background-color: #fff;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

// ========== HEADER / BANNER ==========

const Banner = styled.header`
  background: #f5f5f5; /* Light background for the top banner */
  position: relative;
  text-align: center;
  padding: 2rem 1rem;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const LogoPlaceholder = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #d2b48c; /* Tan/Gold placeholder color */
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 4px;
  @media (max-width: 768px) {
    position: static;
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

const Elephant = styled.img`
  max-width: 180px;
  margin: 0 auto 1rem auto;
  display: block;
  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

const Tagline = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// ========== PRODUCTS SECTION ==========

const ProductsSection = styled.section`
  background: #2b2b2b url('https://i.ibb.co/xFnT7t1/wood-texture.jpg') repeat center/cover;
  /* ^ You can replace with your own texture or color */
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductCard = styled.div`
  background: #fff;
  width: 250px;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`;

const PlateImage = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
`;

const PriceBadge = styled.div`
  background: #d2b48c; /* Gold / Tan color */
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
    background: #c9a671; /* Slightly darker gold */
    color: #fff;
  }
`;

// ========== FOOTER / CALL-TO-ACTION ==========

const FooterSection = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
`;

const ButtonHover = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const OrderButton = styled.a`
  display: inline-block;
  background: #d2b48c;
  color: #000;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    background: #c9a671;
    color: #fff;
    animation: ${ButtonHover} 1s ease infinite;
  }
`;

const PhoneNumber = styled.a`
  display: inline-block;
  color: #d2b48c;
  font-size: 1.1rem;
  margin-top: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

// ========== MAIN COMPONENT ==========

export default function App() {
  return (
    <PageContainer>
      {/* Top Banner */}
      <Banner>
        <LogoPlaceholder>Your Logo</LogoPlaceholder>
        <Elephant src={ElephantImg} alt="Elephant Silhouette" />
        <Tagline>
          "Savor the flavors of our exquisite dishes, where every bite tells a delicious story."
        </Tagline>
      </Banner>

      {/* Products Section */}
      <ProductsSection>
        {/* Fried Beans Card */}
        <ProductCard>
          <PriceBadge>$15</PriceBadge>
          <PlateImage src={FriedBeansImg} alt="Fried Beans Plate" />
          <ProductName>Fried Beans</ProductName>
        </ProductCard>

        {/* Boiled Beans Card */}
        <ProductCard>
          <PriceBadge>$9</PriceBadge>
          <PlateImage src={BoiledBeansImg} alt="Boiled Beans Plate" />
          <ProductName>Boiled Beans</ProductName>
        </ProductCard>
      </ProductsSection>

      {/* Footer / CTA Section */}
      <FooterSection>
        <OrderButton href="#order-now">
          Order Now
        </OrderButton>
        <br />
        <PhoneNumber href="tel:+254712345987">
          +254 712 345 987
        </PhoneNumber>
      </FooterSection>
    </PageContainer>
  );
}
