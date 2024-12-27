import React from 'react';
import { motion } from 'framer-motion';
import { useRTL } from '../contexts/RTLContext';
import { PageContainer, PageTitle, PageContent } from '../styles/pages';

const AboutPage = () => {
  const { isRTL } = useRTL();
  const content = isRTL ? arabicContent.about : englishContent.about;

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle>{content.title}</PageTitle>
      <PageContent>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {content.content}
        </motion.p>
      </PageContent>
    </PageContainer>
  );
};

export default AboutPage;