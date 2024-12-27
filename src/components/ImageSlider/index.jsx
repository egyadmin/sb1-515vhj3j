import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { galleryImages } from '../../data/galleryImages';
import { useRTL } from '../../contexts/RTLContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import {
  SliderContainer,
  SlideImage,
  SlideOverlay,
  SlideCaption,
  SlideContent,
  ExpandButton
} from './styles';

const ImageSlider = () => {
  const { isRTL } = useRTL();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SliderContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <SlideContent>
                <SlideImage 
                  src={image.url} 
                  alt={image.caption}
                  loading="lazy"
                />
                <SlideOverlay />
                <SlideCaption>{image.caption}</SlideCaption>
                <ExpandButton
                  onClick={() => openLightbox(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  🔍
                </ExpandButton>
              </SlideContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentImageIndex}
        slides={galleryImages.map(img => ({ src: img.url, alt: img.caption }))}
        plugins={[Zoom, Thumbnails]}
        carousel={{
          finite: true,
          preload: 3,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
        thumbnails={{
          width: 120,
          height: 80,
        }}
        render={{
          iconZoomIn: () => "🔍+",
          iconZoomOut: () => "🔍-",
          iconNext: () => isRTL ? "←" : "→",
          iconPrev: () => isRTL ? "→" : "←",
          iconClose: () => "✕",
        }}
      />
    </>
  );
};

export default ImageSlider;