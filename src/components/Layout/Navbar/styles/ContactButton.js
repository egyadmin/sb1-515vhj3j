import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactButton = styled(motion.a)`
  background: ${props => props.theme.gradients.primary};
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 12px;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.hover};
  }
`;