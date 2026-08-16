import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

/**
 * Footer – Premium footer with contact info, navigation, social links, and FR/EN i18n
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  return (
    <footer className="footer" id="footer">
      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__brand-col">
            <div className="footer__brand">
              <img
                src="/images/logo.jpg"
                alt="Innovation Design Logo"
                className="footer__logo"
                loading="lazy"
              />
              <div>
                <h4 className="footer__brand-name">Innovation Design</h4>
                <span className="footer__brand-tagline">
                  {t('footer.brandTagline')}
                </span>
              </div>
            </div>
            <p className="footer__brand-desc">
              {t('footer.brandDesc')}
            </p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/AtelierDesignmontassarbenayech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer__social-link"
                id="social-facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/montassar_ben_ayech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer__social-link"
                id="social-instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.threads.com/@montassar_ben_ayech?xmt=AQG0LEtedZk2SaLTJiWiB7rMh_nMgVf9Ld3rrP3Gh0YrDOg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="footer__social-link"
                id="social-threads"
              >
                <FaThreads />
              </a>
              <a
                href="https://wa.me/21654432952"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer__social-link"
                id="social-whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h5 className="footer__col-title">{t('footer.navTitle')}</h5>
            <nav className="footer__nav">
              <Link to="/" className="footer__link">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="footer__link">
                {t('nav.about')}
              </Link>
              <Link to="/projects" className="footer__link">
                {t('nav.projects')}
              </Link>
              <Link to="/services" className="footer__link">
                {t('nav.services')}
              </Link>
              <Link to="/contact" className="footer__link">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h5 className="footer__col-title">{t('footer.servicesTitle')}</h5>
            <nav className="footer__nav">
              <Link to="/services" className="footer__link">
                {t('servicesPage.serv1Title')}
              </Link>
              <Link to="/services" className="footer__link">
                {t('servicesPage.serv2Title')}
              </Link>
              <Link to="/services" className="footer__link">
                {t('servicesPage.serv3Title')}
              </Link>
              <Link to="/services" className="footer__link">
                {t('servicesPage.serv4Title')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer__col">
            <h5 className="footer__col-title">{t('footer.contactTitle')}</h5>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <FiPhone className="footer__contact-icon" />
                <a href="tel:+21654432952">+216 54 432 952</a>
              </div>
              <div className="footer__contact-item">
                <FiMail className="footer__contact-icon" />
                <a href="mailto:contact@innovationdesign.com">
                  contact@innovationdesign.com
                </a>
              </div>
              <div className="footer__contact-item">
                <FiMapPin className="footer__contact-icon" />
                <span>
                  {t('footer.addressText')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copyright">
            &copy; {currentYear} Innovation Design. {t('footer.copyright')}
          </p>
          <p className="footer__developer">
            {t('footer.developerText')}{' '}
            <a
              href="https://www.instagram.com/abdelkrim.saida/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__developer-link"
            >
              Abdelkrim.saida
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
