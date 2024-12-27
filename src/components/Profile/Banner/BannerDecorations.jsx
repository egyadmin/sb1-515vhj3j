import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DecorativeCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.theme.gradients.primary};
  opacity: 0.1;
  filter: blur(30px);
`;

const DecorativeLine = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 2px;
  background: ${props => props.theme.gradients.primary};
  opacity: 0.2;
`;

const circleAnimations = {
  first: {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.15, 0.1],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  second: {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.1, 0.12, 0.1],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const lineAnimations = {
  animate: {
    opacity: [0.2, 0.3, 0.2],
    x: [0, 20, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse"
  }
};

export const BannerDecorations = () => (
  <>
    <DecorativeCircle
      style={{ top: '20%', left: '10%', width: '200px', height: '200px' }}
      {...circleAnimations.first}
    />
    <DecorativeCircle
      style={{ bottom: '20%', right: '10%', width: '150px', height: '150px' }}
      {...circleAnimations.second}
    />
    <DecorativeLine
      style={{ top: '30%', left: '5%', transform: 'rotate(45deg)' }}
      {...lineAnimations}
    />
    <DecorativeLine
      style={{ bottom: '30%', right: '5%', transform: 'rotate(-45deg)' }}
      {...lineAnimations}
    />
  </>
);