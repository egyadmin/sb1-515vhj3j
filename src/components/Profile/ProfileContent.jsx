import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContentSection = styled(motion.div)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${props => props.theme.gradients.card};
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.arabic};
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
    border-radius: 2px;
  }
`;

const AchievementList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const AchievementItem = styled(motion.li)`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px);
  }

  h4 {
    color: ${props => props.theme.colors.accent};
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-family: ${props => props.theme.fonts.arabic};
  }

  p {
    color: ${props => props.theme.colors.text};
    line-height: 1.7;
    opacity: 0.9;
  }
`;

const Text = styled.p`
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  font-size: 1.1rem;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProfileContent = ({ content, language }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ContentSection variants={item}>
        <SectionTitle>{content.about.title}</SectionTitle>
        <Text>{content.about.content}</Text>
      </ContentSection>

      <ContentSection variants={item}>
        <SectionTitle>{content.achievements.title}</SectionTitle>
        <AchievementList>
          {content.achievements.items.map((achievement, index) => (
            <AchievementItem
              key={index}
              variants={item}
            >
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </AchievementItem>
          ))}
        </AchievementList>
      </ContentSection>

      <ContentSection variants={item}>
        <SectionTitle>{content.vision.title}</SectionTitle>
        <Text>{content.vision.content}</Text>
      </ContentSection>
    </motion.div>
  );
};

export default ProfileContent;