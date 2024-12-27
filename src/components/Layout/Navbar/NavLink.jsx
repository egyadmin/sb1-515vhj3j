import React from 'react';
import styled from 'styled-components';

const StyledNavLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: ${props => props.$active ? '600' : '500'};
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

const NavLink = ({ isActive, children, ...props }) => (
  <StyledNavLink $active={isActive} {...props}>
    {children}
  </StyledNavLink>
);

export default NavLink;