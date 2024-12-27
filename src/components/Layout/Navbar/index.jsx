import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Nav, NavContent, Logo, NavLinks } from './styles';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { ContactButton } from './styles/ContactButton';
import { MobileMenuButton } from './styles/MobileMenuButton';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Navbar = ({ content, language, setLanguage }) => {
  const scrolled = useScrollPosition(50);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/about', label: language === 'ar' ? 'نبذة عنا' : 'About' },
    { path: '/services', label: language === 'ar' ? 'خدماتنا' : 'Services' },
    { path: '/achievements', label: language === 'ar' ? 'إنجازاتنا' : 'Achievements' },
    { path: '/vision', label: language === 'ar' ? 'رؤيتنا' : 'Vision' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <Nav scrolled={scrolled}>
      <NavContent>
        <Logo onClick={() => navigate('/')}>{content.header.title}</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              isActive={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
          <ContactButton href="#contact">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </ContactButton>
        </NavLinks>
        <MobileMenuButton 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContent>
      
      <MobileMenu open={isMobileMenuOpen} scrolled={scrolled}>
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            isActive={location.pathname === item.path}
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
          </NavLink>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;