import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/21654432952"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label={t('whatsapp.ariaLabel')}
      title={t('whatsapp.tooltip')}
    >
      <div className="floating-whatsapp__icon">
        <FaWhatsapp />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
