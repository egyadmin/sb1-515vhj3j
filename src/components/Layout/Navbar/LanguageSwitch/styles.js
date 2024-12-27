import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SwitcherContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 4px;
  margin-right: 2rem;
  border: 1px solid rgba(26, 54, 93, 0.1);
`;

export const LanguageButton = styled(motion.button)`
  background: ${props => props.active ? props.theme.gradients.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: ${props => props.theme.fonts.arabic};
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? props.theme.gradients.primary : 'rgba(26, 54, 93, 0.05)'};
  }

  .lang-icon {
    font-size: 1rem;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(26, 54, 93, 0.1);
  margin: 0 4px;
`;