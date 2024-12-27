import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem;
  border-radius: 15px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 3s infinite;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(26, 54, 93, 0.1);
  }
`;

export const LogoImage = styled(motion.img)`
  height: 70px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: filter 0.3s ease;

  &:hover {
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15));
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const MainText = styled.span`
  font-family: ${props => props.theme.fonts.arabic};
  font-size: 1.6rem;
  font-weight: 700;
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const SubText = styled.span`
  font-family: ${props => props.theme.fonts.arabic};
  font-size: 1rem;
  color: ${props => props.theme.colors.accent};
  opacity: 0.9;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;