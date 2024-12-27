import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  padding: 3rem;
  margin-top: 3rem;
  text-align: center;
  border: 1px solid rgba(30, 64, 175, 0.1);
  box-shadow: ${props => props.theme.shadows.soft};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => props.theme.gradients.primary};
  }
`;

const ContactTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2.5rem;
  font-family: ${props => props.theme.fonts.arabic};
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
    border-radius: 2px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactItem = styled(motion.a)`
  padding: 2rem;
  background: ${props => props.theme.gradients.card};
  border-radius: 16px;
  border: 1px solid rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: ${props => props.href ? 'pointer' : 'default'};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: ${props => props.href ? 'translateY(-5px)' : 'none'};
    box-shadow: ${props => props.href ? props.theme.shadows.hover : 'none'};
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: inline-block;
  }

  .label {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.arabic};
  }

  .value {
    color: ${props => props.theme.colors.text};
    font-size: 1.1rem;
    line-height: 1.6;
  }

  &.primary {
    background: ${props => props.theme.gradients.primary};
    .icon, .label, .value {
      color: white;
    }
  }
`;

const ContactInfo = ({ contact }) => {
  const contactItems = [
    {
      icon: '📞',
      label: 'اتصل بنا',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^0-9]/g, '')}`,
      primary: true
    },
    {
      icon: '📱',
      label: 'واتساب',
      value: contact.whatsapp,
      href: `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`,
      primary: true
    },
    {
      icon: '🕒',
      label: 'ساعات العمل',
      value: contact.hours
    },
    {
      icon: '📍',
      label: 'العنوان',
      value: contact.location
    }
  ];

  return (
    <ContactContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ContactTitle>تواصل معنا</ContactTitle>
      <ContactGrid>
        {contactItems.map((item, index) => (
          <ContactItem
            key={index}
            href={item.href}
            target={item.href?.startsWith('http') ? '_blank' : undefined}
            rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={item.primary ? 'primary' : ''}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon">{item.icon}</div>
            <div className="label">{item.label}</div>
            <div className="value">{item.value}</div>
          </ContactItem>
        ))}
      </ContactGrid>
    </ContactContainer>
  );
};

export default ContactInfo;