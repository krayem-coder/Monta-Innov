import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * SEO Component – Dynamic management of document head metadata, canonical, hreflang, OpenGraph, and JSON-LD schema
 */
const SEO = ({ title, description, image = '/images/logo.jpg', path = '', schema = null }) => {
  const { language } = useLanguage();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.innovationdesign.tn';
  const fullUrl = `${baseUrl}${path}`;

  useEffect(() => {
    // 1. Document Title
    if (title) {
      document.title = title;
    }

    // Helper to create or update meta tags
    const updateMetaTag = (selectorAttr, selectorVal, content) => {
      let element = document.querySelector(`meta[${selectorAttr}="${selectorVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(selectorAttr, selectorVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content || '');
    };

    // Helper to create or update link tags
    const updateLinkTag = (rel, href, attributes = {}) => {
      let selector = `link[rel="${rel}"]`;
      if (attributes.hreflang) {
        selector += `[hreflang="${attributes.hreflang}"]`;
      }
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        Object.keys(attributes).forEach((attr) => {
          element.setAttribute(attr, attributes[attr]);
        });
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Meta Description
    updateMetaTag('name', 'description', description);

    // 3. Open Graph Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', fullUrl);
    updateMetaTag('property', 'og:image', image.startsWith('http') ? image : `${baseUrl}${image}`);
    updateMetaTag('property', 'og:site_name', 'Innovation Design');
    updateMetaTag('property', 'og:locale', language === 'fr' ? 'fr_FR' : 'en_US');

    // 4. Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image.startsWith('http') ? image : `${baseUrl}${image}`);

    // 5. Canonical & Hreflang Tags
    updateLinkTag('canonical', fullUrl);
    updateLinkTag('alternate', fullUrl, { hreflang: 'fr' });
    updateLinkTag('alternate', fullUrl, { hreflang: 'en' });
    updateLinkTag('alternate', fullUrl, { hreflang: 'x-default' });

    // 6. JSON-LD Schema.org
    let scriptElement = document.querySelector('#seo-schema-script');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'seo-schema-script';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'ArchitectureFirm',
      name: 'Innovation Design',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.jpg`,
      image: `${baseUrl}/images/villa1.jpg`,
      description: description,
      telephone: '+21654432952',
      email: 'contact@innovationdesign.com',
      founder: {
        '@type': 'Person',
        name: 'Montassar Ben Ayech',
        jobTitle: 'Interior Architect',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Avenue Habib Bourguiba',
        addressLocality: 'Sayada',
        addressRegion: 'Monastir',
        postalCode: '5099',
        addressCountry: 'TN',
      },
      sameAs: [
        'https://www.facebook.com/AtelierDesignmontassarbenayech',
        'https://www.instagram.com/montassar_ben_ayech/',
        'https://www.threads.com/@montassar_ben_ayech',
      ],
    };

    scriptElement.textContent = JSON.stringify(schema || defaultSchema);

  }, [title, description, image, path, language, fullUrl, baseUrl, schema]);

  return null;
};

export default SEO;
