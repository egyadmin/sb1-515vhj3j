import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  padding: 2.5rem;
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  border: 1px solid rgba(49, 130, 206, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.gradients.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${props => props.theme.gradients.card};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 600;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
  font-size: 1.1rem;
`;

const ServiceCard = ({ title, description }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceIcon>
        <img src={`/images/research-icons/${title.toLowerCase().includes('رسائل') ? 'thesis' : 
                    title.toLowerCase().includes('دراسات') ? 'research' :
                    title.toLowerCase().includes('استشارات') ? 'consultation' : 'analysis'}.svg`} 
             alt={title} />
      </ServiceIcon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ServiceCard;