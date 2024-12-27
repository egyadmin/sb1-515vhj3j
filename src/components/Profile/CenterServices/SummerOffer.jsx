import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const OfferContainer = styled(motion.div)`
  background: ${props => props.theme.gradients.highlight};
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.soft};

  &::before {
    content: '🌟';
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 6rem;
    opacity: 0.1;
    transform: rotate(15deg);
  }
`;

const OfferContent = styled.div`
  position: relative;
  z-index: 2;
`;

const OfferTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 700;
  text-align: center;
`;

const OfferDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.3rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Feature = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(30, 64, 175, 0.08);

  &::before {
    content: '✅';
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

const ContactButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.gradients.primary};
  color: white;
  padding: 1rem 3rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 2rem auto 0;
  max-width: 300px;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.soft};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.hover};
  }

  &::after {
    content: '📱';
    margin-right: 0.8rem;
    font-size: 1.3rem;
  }
`;

// ... rest of the component remains the same