import React from 'react';
import { 
  FooterContainer,
  FooterContent,
  FooterSection,
  SocialLinks,
  ContactList,
  Copyright
} from './styles';
import { motion } from 'framer-motion';

const Footer = ({ content }) => {
  return (
    <FooterContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FooterContent>
        <FooterSection>
          <h3>{content.center.title}</h3>
          <p>{content.center.description}</p>
          <SocialLinks>
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Twitter">📧</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>تواصل معنا</h3>
          <ContactList>
            <li>
              📞 {content.center.contact.phone}
            </li>
            <li>
              📱 {content.center.contact.whatsapp}
            </li>
            <li>
              🕒 {content.center.contact.hours}
            </li>
            <li>
              📍 {content.center.contact.location}
            </li>
          </ContactList>
        </FooterSection>

        <FooterSection>
          <h3>خدماتنا</h3>
          <ContactList>
            {content.center.services.map((service, index) => (
              <li key={index}>✓ {service.title}</li>
            ))}
          </ContactList>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} {content.center.title}. جميع الحقوق محفوظة
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;