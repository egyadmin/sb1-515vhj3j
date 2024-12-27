import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BannerContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.05) 0%,
    rgba(59, 130, 246, 0.1) 100%
  );
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: 30px;
  box-shadow: ${props => props.theme.shadows.soft};
  border: 1px solid rgba(37, 99, 235, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/geometric-pattern.svg');
  background-size: cover;
  opacity: 0.03;
  z-index: 2;
`;

const BannerContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  text-align: center;
`;

const BannerTitle = styled(motion.h1)`
  font-size: 4rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(37, 99, 235, 0.2);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.8rem;
  }
`;

const BannerSubtitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  font-weight: 500;
  font-family: ${props => props.theme.fonts.arabic};
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.6rem;
  }
`;

const DecorativeCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.theme.gradients.primary};
  opacity: 0.1;
  filter: blur(30px);
`;

const DecorativeLine = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 2px;
  background: ${props => props.theme.gradients.primary};
  opacity: 0.2;
`;

const Banner = ({ title, subtitle }) => {
  return (
    <BannerContainer
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <BannerOverlay />
      
      <DecorativeCircle
        style={{ top: '20%', left: '10%', width: '200px', height: '200px' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <DecorativeCircle
        style={{ bottom: '20%', right: '10%', width: '150px', height: '150px' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <DecorativeLine
        style={{ top: '30%', left: '5%', transform: 'rotate(45deg)' }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <DecorativeLine
        style={{ bottom: '30%', right: '5%', transform: 'rotate(-45deg)' }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <BannerContent>
        <BannerTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </BannerTitle>
        <BannerSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </BannerSubtitle>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;