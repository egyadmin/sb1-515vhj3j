import React from 'react';
import { 
  BannerContainer, 
  BannerOverlay, 
  BannerContent,
  BannerTitle,
  BannerSubtitle 
} from './BannerStyles';
import { BannerDecorations } from './BannerDecorations';
import { bannerAnimations } from './BannerAnimations';

const Banner = ({ title, subtitle }) => {
  return (
    <BannerContainer {...bannerAnimations.container}>
      <BannerOverlay />
      <BannerDecorations />
      <BannerContent>
        <BannerTitle {...bannerAnimations.title}>
          {title}
        </BannerTitle>
        <BannerSubtitle {...bannerAnimations.subtitle}>
          {subtitle}
        </BannerSubtitle>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;