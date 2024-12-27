import React from 'react';
import styled from 'styled-components';

const StyledMobileMenu = styled.div`
  display: none;
  position: fixed;
  top: ${props => props.$scrolled ? '60px' : '70px'};
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(102, 51, 153, 0.08);
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
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

const MobileMenu = ({ open, scrolled, children }) => (
  <StyledMobileMenu $isOpen={open} $scrolled={scrolled}>
    {children}
  </StyledMobileMenu>
);

export default MobileMenu;