import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
  min-height: 100vh;
  overflow-x: hidden; /* Allow slider to extend full-width */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;