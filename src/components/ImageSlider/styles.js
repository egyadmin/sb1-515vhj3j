import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SliderContainer = styled(motion.div)`
  margin: 2rem -2rem;
  overflow: hidden;
  background: ${props => props.theme.colors.surface};
  position: relative;
  height: 600px;

  .swiper {
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    background: rgba(0, 0, 0, 0.3);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
      transform: scale(1.1);
    }

    &::after {
      font-size: 24px;
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: white;
    opacity: 0.7;

    &-active {
      background: ${props => props.theme.colors.primary};
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 400px;
  }
`;

export const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

export const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    transparent 100%
  );
`;

export const SlideCaption = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-family: ${props => props.theme.fonts.arabic};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.4rem;
    bottom: 30px;
  }
`;

export const ExpandButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;