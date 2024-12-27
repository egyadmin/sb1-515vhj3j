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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    box-shadow: ${props => props.theme.shadows.hover};
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: ${props => props.theme.gradients.card};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.soft};
`;

export const ServiceTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 600;
`;

export const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
  font-size: 1.1rem;
`;