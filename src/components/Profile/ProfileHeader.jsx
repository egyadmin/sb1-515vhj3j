import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = styled(motion.header)`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
    border-radius: 3px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.arabic};
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: ${props => props.theme.shadows.glow};
  letter-spacing: -0.5px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.accent};
  font-weight: 500;
  opacity: 0.9;
  font-family: ${props => props.theme.fonts.arabic};
  margin-top: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;

const ProfileHeader = ({ title, subtitle }) => {
  return (
    <Header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {subtitle}
      </Subtitle>
    </Header>
  );
};

export default ProfileHeader;