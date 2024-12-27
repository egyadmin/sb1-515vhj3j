import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rtlStyles, rtlFlexDirection } from '../../../../styles/rtl';

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  background: ${props => props.scrolled ? 
    'rgba(255, 255, 255, 0.95)' : 
    'rgba(255, 255, 255, 0.8)'
  };
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: ${props => props.scrolled ? 
    '0 4px 20px rgba(102, 51, 153, 0.08)' : 
    'none'
  };
  transition: all 0.3s ease;
  ${rtlStyles}

  @supports (padding: env(safe-area-inset-top)) {
    padding-top: calc(1rem + env(safe-area-inset-top));
    padding-left: calc(1rem + env(safe-area-inset-left));
    padding-right: calc(1rem + env(safe-area-inset-right));
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

export const Logo = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.arabic};
  transition: all 0.3s ease;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  ${rtlFlexDirection}

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: ${props => props.isActive ? '600' : '500'};
  cursor: pointer;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  touch-action: manipulation;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.gradients.card};
    transform: translateY(-2px);
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: ${props => props.scrolled ? '60px' : '70px'};
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(102, 51, 153, 0.08);
  transform: translateY(${props => props.open ? '0' : '-100%'});
  opacity: ${props => props.open ? '1' : '0'};
  transition: all 0.3s ease;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }

  @supports (padding: env(safe-area-inset-bottom)) {
    padding-bottom: calc(1rem + env(safe-area-inset-bottom));
  }
`;