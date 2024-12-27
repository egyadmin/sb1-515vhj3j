import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rtlStyles } from './rtl';

export const PageContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 2rem;
  ${rtlStyles}
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.arabic};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${props => props.theme.gradients.primary};
    border-radius: 2px;
  }
`;

export const PageContent = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadows.soft};
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const VisionContent = styled(motion.div)`
  font-size: 1.4rem;
  line-height: 2;
  color: ${props => props.theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadows.soft};
`;