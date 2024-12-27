import React from 'react';
import { motion } from 'framer-motion';
import { useRTL } from '../contexts/RTLContext';
import { PageContainer, PageTitle, VisionContent } from '../styles/pages';

const VisionPage = () => {
  const { isRTL } = useRTL();
  const content = isRTL ? arabicContent.vision : englishContent.vision;

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle>{content.title}</PageTitle>
      <VisionContent
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {content.content}
      </VisionContent>
    </PageContainer>
  );
};

export default VisionPage;