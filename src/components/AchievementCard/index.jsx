import React from 'react';
import { motion } from 'framer-motion';
import { 
  CardContainer, 
  AchievementTitle, 
  AchievementDescription 
} from './styles';

const AchievementCard = ({ title, description, delay }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <AchievementTitle>{title}</AchievementTitle>
      <AchievementDescription>{description}</AchievementDescription>
    </CardContainer>
  );
};

export default AchievementCard;