import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "./Footer.css";
/**
 * Footer – Premium footer with contact info, navigation, and social links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              />
              <div>
                <h4 className="footer__brand-name">Innovation Design</h4>
                <span className="footer__brand-tagline">
                  Interior & Architecture Agency
                </span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Agence d'architecture intérieure spécialisée dans la création
              d'espaces uniques, élégants et fonctionnels.
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
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h5 className="footer__col-title">Navigation</h5>
            <nav className="footer__nav">
              <Link to="/" className="footer__link">
                Accueil
              </Link>
              <Link to="/about" className="footer__link">
                À Propos
              </Link>
              <Link to="/projects" className="footer__link">
                Projets
              </Link>
              <Link to="/services" className="footer__link">
                Services
              </Link>
              <Link to="/contact" className="footer__link">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h5 className="footer__col-title">Services</h5>
            <nav className="footer__nav">
              <Link to="/services" className="footer__link">
                Architecture Intérieure
              </Link>
              <Link to="/services" className="footer__link">
                Rénovation
              </Link>
              <Link to="/services" className="footer__link">
                Aménagement Sur-Mesure
              </Link>
              <Link to="/services" className="footer__link">
                Design & Modélisation 3D
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer__col">
            <h5 className="footer__col-title">Contact</h5>
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
                  Avenue Habib Bourguiba, Sayada Lamta Bou Hajar, Tunisia, 5099
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
            &copy; {currentYear} Innovation Design. Tous droits réservés.
          </p>
          <p className="footer__developer">
            Développé par { }
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
