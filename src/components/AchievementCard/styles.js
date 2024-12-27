import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.soft};
  transition: all 0.3s ease;
  border: 1px solid rgba(49, 130, 206, 0.1);
  height: 100%;

  &:hover {
    box-shadow: ${props => props.theme.shadows.hover};
  }
`;

export const AchievementTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
    border-radius: 2px;
  }
`;

export const AchievementDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
  font-size: 1.1rem;
`;