import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRTL } from '../../contexts/RTLContext';
import {
  ModalOverlay,
  ModalContainer,
  VideoWrapper,
  CloseButton,
  VideoTitle
} from './styles';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  const { isRTL } = useRTL();

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <VideoTitle>{title}</VideoTitle>
            <VideoWrapper>
              <video
                controls
                autoPlay
                width="100%"
                height="100%"
              >
                <source src={videoUrl} type="video/mp4" />
                {isRTL ? 'متصفحك لا يدعم تشغيل الفيديو' : 'Your browser does not support the video tag.'}
              </video>
            </VideoWrapper>
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </CloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;