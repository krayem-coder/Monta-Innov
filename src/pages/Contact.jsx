import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import projects from "../data/projects";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import "./Contact.css";

/**
 * Contact Page – Conversion-optimized form + contact info
 */
const Contact = () => {
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
      {/* Page Header */}
      <section className="hero-minimal" id="contact-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">Contact</span>
          <h1 className="hero-minimal__title">Contactez-Nous</h1>
          <p className="hero-minimal__text">
            Parlons de votre projet et donnons vie à vos idées
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section contact-main" id="contact-main">
        <div className="container contact-main__grid">
          {/* Form */}
          <AnimatedSection className="contact-form-wrapper" direction="left">
            <h2 className="contact-form__heading">Envoyez-nous un message</h2>
            <p className="contact-form__subheading">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans
              les plus brefs délais.
            </p>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              id="contact-form"
            >
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="contact-name">Nom complet *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="contact-phone">Téléphone</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-project-type">Type de projet</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="architecture">
                      Architecture Intérieure
                    </option>
                    <option value="renovation">Rénovation</option>
                    <option value="amenagement">Aménagement Sur-Mesure</option>
                    <option value="3d">Design & Modélisation 3D</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              <div className="contact-form__group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
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
                    <FiCheck /> Message Envoyé !
                  </>
                ) : (
                  <>
                    <FiSend /> Envoyer le Message
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
              <h3 className="contact-info__title">Informations de Contact</h3>
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <FiPhone />
                  </div>
                  <div>
                    <h4>Téléphone</h4>
                    <a href="tel:+21654432952">+216 54 432 952</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <FiMail />
                  </div>
                  <div>
                    <h4>Email</h4>
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
                    <h4>Adresse</h4>
                    <span>
                      Avenue Habib Bourguiba, Sayada Lamta Bou Hajar, Tunisia,
                      5099
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-info__divider" />
              <h4 className="contact-info__social-title">Suivez-nous</h4>
              <div className="contact-info__social">
                <a
                  href="https://www.facebook.com/AtelierDesignmontassarbenayech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/montassar_ben_ayech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.threads.com/@montassar_ben_ayech?xmt=AQG0LEtedZk2SaLTJiWiB7rMh_nMgVf9Ld3rrP3Gh0YrDOg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__social-link"
                >
                  <FaThreads />
                </a>
                <a
                  href="https://wa.me/21654432952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__social-link"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-map">
              <iframe
                title="Innovation Design Location"
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
