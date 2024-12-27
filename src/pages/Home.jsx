import React from 'react';
import { Container } from '../components/Profile/styles';
import Banner from '../components/Profile/Banner';
import ImageSlider from '../components/ImageSlider';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileContent from '../components/Profile/ProfileContent';
import CenterServices from '../components/Profile/CenterServices';
import DiscountBanner from '../components/DiscountBanner';
import { arabicContent, englishContent } from '../data/content';

const Home = ({ language }) => {
  const content = language === 'ar' ? arabicContent : englishContent;

  return (
    <Container>
      <Banner 
        title={content.header.title}
        subtitle={content.header.subtitle}
      />
      <DiscountBanner />
      <ImageSlider />
      <ProfileHeader {...content.header} />
      <ProfileContent content={content} language={language} />
      <CenterServices content={content} />
    </Container>
  );
};

export default Home;