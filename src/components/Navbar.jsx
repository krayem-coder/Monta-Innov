import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FiGlobe } from 'react-icons/fi';
import './Navbar.css';

/**
 * Navbar – Premium navigation with transparent-to-solid scroll effect
 * Includes bilingual FR/EN switcher pill and mobile navigation
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" id="navbar-logo">
          <img src="/images/logo.jpg" alt="Innovation Design Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__brand">Innovation</span>
            <span className="navbar__brand-sub">Design</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" id="main-navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              id={`nav-link-${link.path.replace('/', '') || 'home'}`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span
                  className="navbar__link-indicator"
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons (Language Switcher + CTA + Hamburger) */}
        <div className="navbar__actions">
          {/* Language Switcher Pill */}
          <div className="lang-switcher" id="lang-switcher">
            <FiGlobe className="lang-switcher__icon" />
            <button
              className={`lang-switcher__btn ${language === 'fr' ? 'lang-switcher__btn--active' : ''}`}
              onClick={() => setLanguage('fr')}
              id="lang-btn-fr"
              aria-label="Passer en Français"
            >
              FR
            </button>
            <span className="lang-switcher__divider">|</span>
            <button
              className={`lang-switcher__btn ${language === 'en' ? 'lang-switcher__btn--active' : ''}`}
              onClick={() => setLanguage('en')}
              id="lang-btn-en"
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <Link to="/contact" className="navbar__cta btn btn-primary" id="navbar-cta">
            <span className="navbar__cta-desktop">{t('nav.freeQuote')}</span>
            <span className="navbar__cta-mobile">{t('nav.shortQuote')}</span>
          </Link>

          {/* Hamburger Toggle */}
          <button
            className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            id="hamburger-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav className="navbar__mobile-nav">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="navbar__mobile-lang"
              >
                <button
                  className={`mobile-lang-btn ${language === 'fr' ? 'mobile-lang-btn--active' : ''}`}
                  onClick={() => setLanguage('fr')}
                >
                  Français (FR)
                </button>
                <button
                  className={`mobile-lang-btn ${language === 'en' ? 'mobile-lang-btn--active' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  English (EN)
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" className="btn btn-primary navbar__mobile-cta">
                  {t('nav.freeQuote')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
