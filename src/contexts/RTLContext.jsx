import React, { createContext, useContext } from 'react';

const RTLContext = createContext();

export const useRTL = () => useContext(RTLContext);

export const RTLProvider = ({ language, children }) => {
  const isRTL = language === 'ar';
  
  React.useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);
  
  return (
    <RTLContext.Provider value={{ isRTL, language }}>
      {children}
    </RTLContext.Provider>
  );
};