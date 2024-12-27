import React from 'react';
import { motion } from 'framer-motion';
import { useRTL } from '../contexts/RTLContext';
import { arabicContent, englishContent } from '../data/content';
import { PageContainer, PageTitle } from '../styles/pages';
import AchievementCard from '../components/AchievementCard';

const Achievements = () => {
  const { isRTL } = useRTL();
  const content = isRTL ? arabicContent.achievements : englishContent.achievements;

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle>{content.title}</PageTitle>
      <motion.div
        className="achievements-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '2rem'
        }}
      >
        {content.items.map((achievement, index) => (
          <AchievementCard
            key={index}
            {...achievement}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </PageContainer>
  );
};

export default Achievements;