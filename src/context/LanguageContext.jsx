import React, { createContext, useContext, useState, useEffect } from 'react';
import fr from '../locales/fr';
import en from '../locales/en';

const LanguageContext = createContext();

const translations = { fr, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const savedLang = localStorage.getItem('app_lang');
    return savedLang === 'en' ? 'en' : 'fr';
  });

  const setLanguage = (lang) => {
    if (lang === 'fr' || lang === 'en') {
      setLanguageState(lang);
      localStorage.setItem('app_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Safe getter for nested keys, e.g. t('nav.home') or t('hero.title')
   */
  const t = (path, fallback = '') => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to French if missing in EN
        let frCurrent = translations.fr;
        for (const k of keys) {
          if (frCurrent && frCurrent[k] !== undefined) {
            frCurrent = frCurrent[k];
          } else {
            return fallback || path;
          }
        }
        return frCurrent;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
