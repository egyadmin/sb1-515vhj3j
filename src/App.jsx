import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { RTLProvider } from './contexts/RTLContext';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Vision from './pages/Vision';
import Footer from './components/Layout/Footer';
import { arabicContent, englishContent } from './data/content';

const App = () => {
  const [language, setLanguage] = useState('ar');
  const content = language === 'ar' ? arabicContent : englishContent;
  const themeWithLanguage = { ...theme, language };

  return (
    <ThemeProvider theme={themeWithLanguage}>
      <RTLProvider language={language}>
        <GlobalStyle />
        <Navbar 
          content={content} 
          language={language} 
          setLanguage={setLanguage} 
        />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
        <Footer content={content} />
      </RTLProvider>
    </ThemeProvider>
  );
};

export default App;