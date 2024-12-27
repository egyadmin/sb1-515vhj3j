import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import SummerOffer from './SummerOffer';
import ContactInfo from './ContactInfo';

const ServicesContainer = styled(motion.div)`
  margin: 3rem 0;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 700;
`;

const ServicesDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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

const CenterServices = ({ content }) => {
  return (
    <ServicesContainer
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ServicesHeader>
        <ServicesTitle>{content.center.title}</ServicesTitle>
        <ServicesDescription>{content.center.description}</ServicesDescription>
      </ServicesHeader>

      <ServiceGrid>
        {content.center.services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </ServiceGrid>

      <SummerOffer offer={content.center.summerOffer} />
      <ContactInfo contact={content.center.contact} />
    </ServicesContainer>
  );
};

export default CenterServices;