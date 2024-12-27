import React from 'react';
import { motion } from 'framer-motion';
import { 
  CardContainer, 
  ServiceIcon, 
  ServiceTitle, 
  ServiceDescription 
} from './styles';

const ServiceCard = ({ title, description, delay }) => {
  const getServiceIcon = () => {
    if (title.includes('رسائل') || title.includes('Thesis')) return '📚';
    if (title.includes('دراسات') || title.includes('Studies')) return '📊';
    if (title.includes('استشارات') || title.includes('Consultation')) return '💡';
    return '📈';
  };

  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <ServiceIcon>{getServiceIcon()}</ServiceIcon>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
    </CardContainer>
  );
};

export default ServiceCard;