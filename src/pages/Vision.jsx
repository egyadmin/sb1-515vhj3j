import React from 'react';
import { motion } from 'framer-motion';
import { useRTL } from '../contexts/RTLContext';
import { arabicContent, englishContent } from '../data/content';
import { PageContainer, PageTitle, PageContent } from '../styles/pages';

const Vision = () => {
  const { isRTL } = useRTL();
  const content = isRTL ? arabicContent.vision : englishContent.vision;

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle>{content.title}</PageTitle>
      <PageContent
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {content.content}
      </PageContent>
    </PageContainer>
  );
};

export default Vision;