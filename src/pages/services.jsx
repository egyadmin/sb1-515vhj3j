import React from 'react';
import { motion } from 'framer-motion';
import { useRTL } from '../contexts/RTLContext';
import { PageContainer, PageTitle, ServiceGrid } from '../styles/pages';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  const { isRTL } = useRTL();
  const content = isRTL ? arabicContent.center : englishContent.center;

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle>{content.title}</PageTitle>
      <ServiceGrid>
        {content.services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            delay={index * 0.1}
          />
        ))}
      </ServiceGrid>
    </PageContainer>
  );
};

export default ServicesPage;