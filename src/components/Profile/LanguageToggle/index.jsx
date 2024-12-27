import React from 'react';
import { 
  ToggleContainer, 
  ToggleButton, 
  Divider,
  ButtonContent,
  LanguageIcon 
} from './styles';

const LanguageToggle = ({ language, setLanguage }) => {
  return (
    <ToggleContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ToggleButton
        className={language === 'ar' ? 'active' : ''}
        onClick={() => setLanguage('ar')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ButtonContent>
          <LanguageIcon>🌙</LanguageIcon>
          عربي
        </ButtonContent>
      </ToggleButton>

      <Divider />

      <ToggleButton
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ButtonContent>
          <LanguageIcon>🌟</LanguageIcon>
          English
        </ButtonContent>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default LanguageToggle;