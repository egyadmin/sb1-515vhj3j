import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled(motion.footer)`
  background: ${props => props.theme.colors.primary};
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 1rem 1.5rem;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

export const FooterSection = styled.div`
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: ${props => props.theme.fonts.arabic};
    font-weight: 600;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 50px;
      height: 2px;
      background: white;
      opacity: 0.3;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;