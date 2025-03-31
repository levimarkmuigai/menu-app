// src/components/ProductsSection.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import friedBeans from '../assets/fried-beans.jpg';
import boiledBeans from '../assets/boiled-beans.jpg';

/* Container styling for product cards */
const SectionWrapper = styled.section`
  background: ${colors.darkBackground} url('../assets/wood-texture.jpg') repeat center/cover;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #fff;
  width: 280px;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: ${colors.primary};
`;

const Badge = styled.div`
  background: ${colors.tanGold};
  color: #000;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${colors.darkTanGold};
    color: #fff;
  }
`;

// Example products data (could be fetched from an API)
const products = [
  { id: 1, name: 'Fried Beans', price: '$15', imageUrl: friedBeans },
  { id: 2, name: 'Boiled Beans', price: '$9', imageUrl: boiledBeans },
];

/**
 * ProductsSection renders interactive product cards.
 * It demonstrates a modern, responsive layout with hover interactions.
 */
function ProductsSection() {
  return (
    <SectionWrapper>
      {products.map(product => (
        <Card key={product.id}>
          <Badge>{product.price}</Badge>
          <Image src={product.imageUrl} alt={`${product.name} Plate`} />
          <Name>{product.name}</Name>
        </Card>
      ))}
    </SectionWrapper>
  );
}

export default React.memo(ProductsSection);
