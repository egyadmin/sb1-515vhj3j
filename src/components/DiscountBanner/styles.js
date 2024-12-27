import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const waveAnimation = keyframes`
  0% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-30%) translateY(2px); }
  100% { transform: translateX(-50%) translateY(0); }
`;

export const BannerContainer = styled(motion.div)`
  position: fixed;
  top: 80px;
  right: 20px;
  width: 300px;
  height: 160px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1000;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
`;

export const WaveAnimation = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(66, 153, 225, 0.2) 50%,
    rgba(49, 130, 206, 0.4) 100%
  );
  transform-origin: center bottom;
  animation: ${waveAnimation} 3s ease-in-out infinite;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

export const DiscountText = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.arabic};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.small {
    font-size: 1.2rem;
    margin-top: 8px;
    opacity: 0.9;
  }
`;

export const PlayButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 2rem;
  margin-top: 1rem;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const CloseButton = styled(motion.button)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  z-index: 3;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;