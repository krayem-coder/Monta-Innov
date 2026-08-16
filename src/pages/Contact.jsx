import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import "./Contact.css";

/**
 * Contact Page – Conversion-optimized form + contact info, FR/EN bilingual & SEO
 */
const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="contact-page" id="contact-page">
      <SEO
        title={t('seo.contactTitle')}
        description={t('seo.contactDesc')}
        path="/contact"
        image="/images/logo.jpg"
      />

      {/* Page Header */}
      <section className="hero-minimal" id="contact-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">{t('contactPage.headerSubtitle')}</span>
          <h1 className="hero-minimal__title">{t('contactPage.headerTitle')}</h1>
          <p className="hero-minimal__text">
            {t('contactPage.headerText')}
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section contact-main" id="contact-main">
        <div className="container contact-main__grid">
          {/* Form */}
          <AnimatedSection className="contact-form-wrapper" direction="left">
            <h2 className="contact-form__heading">{t('contactPage.formTitle')}</h2>
            <p className="contact-form__subheading">
              {t('contactPage.formSubtitle')}
            </p>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              id="contact-form"
            >
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="contact-name">{t('contactPage.nameLabel')}</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contactPage.namePlaceholder')}
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-email">{t('contactPage.emailLabel')}</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contactPage.emailPlaceholder')}
                    required
                  />
                </div>
              </div>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="contact-phone">{t('contactPage.phoneLabel')}</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contactPage.phonePlaceholder')}
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-project-type">{t('contactPage.projectTypeLabel')}</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">{t('contactPage.selectPlaceholder')}</option>
                    <option value="architecture">
                      {t('contactPage.optionArch')}
                    </option>
                    <option value="renovation">{t('contactPage.optionReno')}</option>
                    <option value="amenagement">{t('contactPage.optionFitout')}</option>
                    <option value="3d">{t('contactPage.option3d')}</option>
                    <option value="autre">{t('contactPage.optionOther')}</option>
                  </select>
                </div>
              </div>
              <div className="contact-form__group">
                <label htmlFor="contact-message">{t('contactPage.messageLabel')}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contactPage.messagePlaceholder')}
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary contact-form__submit ${isSubmitted ? "contact-form__submit--success" : ""}`}
                id="contact-submit"
              >
                {isSubmitted ? (
                  <>
                    <FiCheck /> {t('contactPage.submittedSuccess')}
                  </>
                ) : (
                  <>
                    <FiSend /> {t('contactPage.submitBtn')}
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>

          {/* Contact Info Sidebar */}
          <AnimatedSection
            className="contact-info"
            direction="right"
            delay={0.2}
          >
            <div className="contact-info__card">
              <h3 className="contact-info__title">{t('contactPage.infoTitle')}</h3>
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <FiPhone />
                  </div>
                  <div>
                    <h4>{t('contactPage.phoneHeader')}</h4>
                    <a href="tel:+21654432952">+216 54 432 952</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <FiMail />
                  </div>
                  <div>
                    <h4>{t('contactPage.emailHeader')}</h4>
                    <a href="mailto:contact@innovationdesign.com">
                      contact@innovationdesign.com
                    </a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4>{t('contactPage.addressHeader')}</h4>
                    <span>
                      {t('contactPage.addressText')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-info__divider" />
              <h4 className="contact-info__social-title">{t('contactPage.socialHeader')}</h4>
              <div className="contact-info__social">
                <a
                  href="https://www.facebook.com/AtelierDesignmontassarbenayech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="contact-info__social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/montassar_ben_ayech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="contact-info__social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.threads.com/@montassar_ben_ayech?xmt=AQG0LEtedZk2SaLTJiWiB7rMh_nMgVf9Ld3rrP3Gh0YrDOg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                  className="contact-info__social-link"
                >
                  <FaThreads />
                </a>
                <a
                  href="https://wa.me/21654432952"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="contact-info__social-link"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                title={t('contactPage.mapTitle')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25821.5!2d10.82!3d35.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a5c7b5a5a5%3A0x0!2sSayada!5e0!3m2!1sfr!2stn!4v1700000000000!5m2!1sfr!2stn"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="contact-map"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
