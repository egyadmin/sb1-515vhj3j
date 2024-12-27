import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  body {
    font-family: ${props => props.theme.fonts.arabic};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    direction: ${props => props.theme.language === 'ar' ? 'rtl' : 'ltr'};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    position: relative;
  }

  /* Fix for iOS Safari momentum scrolling */
  body.modal-open {
    position: fixed;
    width: 100%;
  }

  /* Improve touch targets on mobile */
  button, a {
    min-height: 44px;
    min-width: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* Fix for iOS Safari 100vh issue */
  .min-h-screen {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  /* Fix for mobile Safari overflow issues */
  .overflow-scroll {
    -webkit-overflow-scrolling: touch;
  }

  /* Fix for mobile browser address bar resizing */
  @supports (-webkit-touch-callout: none) {
    .min-h-screen {
      min-height: -webkit-fill-available;
    }
  }

  /* RTL specific styles */
  [dir="rtl"] {
    .nav-links {
      flex-direction: row-reverse;
    }
    
    .icon {
      margin-left: 0;
      margin-right: 8px;
    }
    
    .text-align {
      text-align: right;
    }
    
    .float {
      float: right;
    }
  }

  /* Fix for mobile Safari input styles */
  input, textarea {
    -webkit-appearance: none;
    border-radius: 0;
    &:focus {
      outline: none;
    }
  }

  /* Prevent text size adjustment on orientation change */
  * {
    text-size-adjust: none;
    -webkit-text-size-adjust: none;
  }
`;

export default GlobalStyle;