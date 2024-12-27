import React from 'react';
import { SwitcherContainer, LanguageButton, Divider } from './styles';

const LanguageSwitch = ({ language, setLanguage }) => {
  return (
    <SwitcherContainer
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <LanguageButton
        active={language === 'ar'}
        onClick={() => setLanguage('ar')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="lang-icon">🌙</span>
        عربي
      </LanguageButton>
      <Divider />
      <LanguageButton
        active={language === 'en'}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="lang-icon">🌟</span>
        English
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitch;