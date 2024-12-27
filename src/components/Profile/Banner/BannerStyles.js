import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BannerContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 600px;
  background: ${props => props.theme.gradients.primary};
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: 30px;
  box-shadow: ${props => props.theme.shadows.glow};

  @media (max-width: 768px) {
    height: 400px;
    border-radius: 20px;
  }
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/banner-bg.jpg') center center;
  background-size: cover;
  opacity: 0.1;
  mix-blend-mode: overlay;
`;

export const BannerContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  text-align: center;
  color: white;
`;

export const BannerTitle = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: white;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const BannerSubtitle = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.arabic};
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;