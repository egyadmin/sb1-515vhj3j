import React from 'react';
import { motion } from 'framer-motion';
import { useRTL } from '../contexts/RTLContext';
import { PageContainer, PageTitle, AchievementGrid } from '../styles/pages';
import AchievementCard from '../components/AchievementCard';

const AchievementsPage = () => {
  const { isRTL } = useRTL();
  const content = isRTL ? arabicContent.achievements : englishContent.achievements;

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle>{content.title}</PageTitle>
      <AchievementGrid>
        {content.items.map((achievement, index) => (
          <AchievementCard
            key={index}
            {...achievement}
            delay={index * 0.1}
          />
        ))}
      </AchievementGrid>
    </PageContainer>
  );
};

export default AchievementsPage;