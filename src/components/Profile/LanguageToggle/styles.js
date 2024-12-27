import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToggleContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0.5rem;
  background: ${props => props.theme.colors.surface};
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadows.soft};
  border: 1px solid rgba(30, 64, 175, 0.1);
  position: sticky;
  top: 1rem;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

export const ToggleButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 12px;
  font-family: ${props => props.theme.fonts.arabic};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.gradients.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    border-radius: inherit;
  }

  &.active {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    background: ${props => props.theme.gradients.card};
    box-shadow: ${props => props.theme.shadows.soft};
  }

  &:hover:not(.active) {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.gradients.card};
  }
`;

export const ButtonContent = styled.span`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LanguageIcon = styled.span`
  font-size: 1.2rem;
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: ${props => props.theme.colors.muted};
  opacity: 0.2;
`;