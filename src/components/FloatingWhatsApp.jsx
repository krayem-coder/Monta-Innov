import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/21654432952"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="floating-whatsapp__icon">
        <FaWhatsapp />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
