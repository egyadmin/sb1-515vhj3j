import React from 'react';
import { Container } from './styles';
import Navbar from '../Layout/Navbar';
import Banner from './Banner';
import ImageSlider from '../ImageSlider';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import CenterServices from './CenterServices';
import DiscountBanner from '../DiscountBanner';
import Footer from '../Layout/Footer';
import { arabicContent, englishContent } from '../../data/content';

const Profile = ({ language, setLanguage }) => {
  const content = language === 'ar' ? arabicContent : englishContent;

  return (
    <>
      <Navbar 
        content={content} 
        language={language} 
        setLanguage={setLanguage} 
      />
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
      <Footer content={content} />
    </>
  );
};

export default Profile;