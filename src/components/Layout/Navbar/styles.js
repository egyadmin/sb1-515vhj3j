import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rtlStyles, rtlFlexDirection } from '../../../styles/rtl';

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: ${props => props.scrolled ? 
    'rgba(255, 255, 255, 0.95)' : 
    'rgba(255, 255, 255, 0.8)'
  };
  backdrop-filter: blur(12px);
  box-shadow: ${props => props.scrolled ? 
    '0 4px 20px rgba(26, 54, 93, 0.08)' : 
    'none'
  };
  transition: all 0.3s ease;
  ${rtlStyles}
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.arabic};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${rtlFlexDirection}
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${rtlFlexDirection}

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  font-size: 1.1rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: ${props => props.isActive ? '600' : '500'};
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.gradients.card};
    transform: translateY(-2px);
  }
`;

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

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${props => props.theme.colors.primary};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  transform: translateY(${props => props.open ? '0' : '-100%'});
  opacity: ${props => props.open ? '1' : '0'};
  transition: all 0.3s ease;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;