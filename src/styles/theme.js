const theme = {
  colors: {
    // Primary purple from image
    primary: '#663399',
    // Lighter purple for accents
    secondary: '#8A4FBF',
    // Deep purple for text
    text: '#2D1B3D',
    // Light background
    background: '#F8F5FB',
    // White surface with slight purple tint
    surface: '#FFFFFF',
    surfaceLight: '#F5F0F9',
    // Accent colors
    accent: '#9B6FB6',
    highlight: '#7B52AB',
    muted: '#9184A3',
    success: '#48BB78'
  },
  fonts: {
    arabic: "'Cairo', sans-serif",
    english: "'Playfair Display', serif"
  },
  gradients: {
    primary: 'linear-gradient(135deg, #663399 0%, #8A4FBF 100%)',
    surface: 'linear-gradient(180deg, #FFFFFF 0%, #F5F0F9 100%)',
    card: 'linear-gradient(45deg, rgba(102, 51, 153, 0.03) 0%, rgba(138, 79, 191, 0.05) 100%)',
    highlight: 'linear-gradient(135deg, #7B52AB 0%, #9B6FB6 100%)'
  },
  shadows: {
    soft: '0 4px 20px rgba(102, 51, 153, 0.08)',
    glow: '0 0 20px rgba(102, 51, 153, 0.12)',
    hover: '0 8px 30px rgba(102, 51, 153, 0.15)'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  }
};

export default theme;