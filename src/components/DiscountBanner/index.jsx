import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRTL } from '../../contexts/RTLContext';
import VideoModal from '../VideoModal';
import {
  BannerContainer,
  BannerContent,
  DiscountText,
  WaveAnimation,
  CloseButton,
  VideoBackground,
  PlayButton
} from './styles';

const DiscountBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const { isRTL } = useRTL();
  
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <BannerContainer
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            onClick={() => setIsVideoModalOpen(true)}
          >
            <VideoBackground autoPlay muted loop playsInline>
              <source src="https://cv.nsajco.com/Dr.nansy.mp4" type="video/mp4" />
            </VideoBackground>
            <WaveAnimation />
            <BannerContent>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <DiscountText>
                  {isRTL ? 'خصم 25% على جميع الخدمات 🎉' : '25% OFF All Services 🎉'}
                </DiscountText>
                <DiscountText className="small">
                  {isRTL ? 'عرض خاص 2025' : 'Special Offer 2025'}
                </DiscountText>
              </motion.div>
              <PlayButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ▶️
              </PlayButton>
            </BannerContent>
            <CloseButton
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </CloseButton>
          </BannerContainer>
        )}
      </AnimatePresence>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://cv.nsajco.com/Dr.nansy.mp4"
        title={isRTL ? "عروض وخصومات 2025" : "Special Offers 2025"}
      />
    </>
  );
};

export default DiscountBanner;