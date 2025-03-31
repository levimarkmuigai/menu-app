// components/ProductsSection.js
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

/* Section styling with a textured background and responsive layout */
const SectionWrapper = styled.section`
  background: ${colors.darkBackground || '#2b2b2b'} url('https://i.ibb.co/xFnT7t1/wood-texture.jpg') repeat center/cover;
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
  color: #333;
`;

const Badge = styled.div`
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

// Sample data representing products
const products = [
  { id: 1, name: 'Fried Beans', price: '$15', imageUrl: 'https://via.placeholder.com/250' },
  { id: 2, name: 'Boiled Beans', price: '$9', imageUrl: 'https://via.placeholder.com/250' },
];

/**
 * ProductsSection displays a list of product cards.
 * Each card is interactive with hover effects on images and price badges.
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
