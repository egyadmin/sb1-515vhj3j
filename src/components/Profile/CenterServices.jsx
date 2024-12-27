import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesContainer = styled(motion.div)`
  margin: 3rem 0;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.gradients.card};
  border-radius: 12px;
  border: 1px solid rgba(37, 99, 235, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const ServiceTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.arabic};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: ${props => props.theme.gradients.card};
  border-radius: 12px;
  text-align: center;

  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-family: ${props => props.theme.fonts.arabic};
  }

  p {
    margin: 0.5rem 0;
    color: ${props => props.theme.colors.text};
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const CenterServices = ({ content }) => {
  return (
    <ServicesContainer
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ServiceGrid>
        {content.center.services.map((service, index) => (
          <ServiceCard key={index} variants={item}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>

      <ContactInfo variants={item}>
        <h4>تواصل معنا</h4>
        <p>هاتف: {content.center.contact.phone}</p>
        <p>واتساب: {content.center.contact.whatsapp}</p>
        <p>{content.center.contact.hours}</p>
      </ContactInfo>
    </ServicesContainer>
  );
};

export default CenterServices;