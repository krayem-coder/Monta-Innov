import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";
import {
  FiHome,
  FiTool,
  FiLayers,
  FiMonitor,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import "./Services.css";

/**
 * TimelineStep – A single step in the vertical timeline with scroll animation
 */
const TimelineStep = ({ step, index, isLast }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <div className="timeline__step" ref={ref}>
      {/* Progress line segment */}
      {!isLast && (
        <motion.div
          className="timeline__line-segment"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      )}

      {/* Step number on the center line */}
      <motion.div
        className="timeline__marker"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          type: "spring",
          stiffness: 200,
        }}
      >
        <span className="timeline__marker-number">{step.number}</span>
      </motion.div>

      {/* Card content – alternates sides on desktop */}
      <motion.div
        className={`timeline__card ${isEven ? "timeline__card--left" : "timeline__card--right"}`}
        initial={{ opacity: 0, y: 40, x: isEven ? -30 : 30 }}
        animate={
          inView
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 0, y: 40, x: isEven ? -30 : 30 }
        }
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className="timeline__card-title">{step.title}</h3>
        <p className="timeline__card-desc">{step.desc}</p>
        {step.image && (
          <div className="timeline__card-img">
            <img src={step.image} alt={step.title} loading="lazy" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FiHome />,
      title: t('servicesPage.serv1Title'),
      description: t('servicesPage.serv1Desc'),
      features: [
        t('servicesPage.serv1F1'),
        t('servicesPage.serv1F2'),
        t('servicesPage.serv1F3'),
        t('servicesPage.serv1F4'),
      ],
      image: "/images/villa1.jpg",
    },
    {
      icon: <FiTool />,
      title: t('servicesPage.serv2Title'),
      description: t('servicesPage.serv2Desc'),
      features: [
        t('servicesPage.serv2F1'),
        t('servicesPage.serv2F2'),
        t('servicesPage.serv2F3'),
        t('servicesPage.serv2F4'),
      ],
      image: "/images/villa1.jpg",
    },
    {
      icon: <FiLayers />,
      title: t('servicesPage.serv3Title'),
      description: t('servicesPage.serv3Desc'),
      features: [
        t('servicesPage.serv3F1'),
        t('servicesPage.serv3F2'),
        t('servicesPage.serv3F3'),
        t('servicesPage.serv3F4'),
      ],
      image: "/images/portfolio/salle-de-bain-marocaine/mar1.jpg",
    },
    {
      icon: <FiMonitor />,
      title: t('servicesPage.serv4Title'),
      description: t('servicesPage.serv4Desc'),
      features: [
        t('servicesPage.serv4F1'),
        t('servicesPage.serv4F2'),
        t('servicesPage.serv4F3'),
        t('servicesPage.serv4F4'),
      ],
      image: "/images/villa2.jpg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: t('servicesPage.step1Title'),
      desc: t('servicesPage.step1Desc'),
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "02",
      title: t('servicesPage.step2Title'),
      desc: t('servicesPage.step2Desc'),
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "03",
      title: t('servicesPage.step3Title'),
      desc: t('servicesPage.step3Desc'),
      image:
        "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "04",
      title: t('servicesPage.step4Title'),
      desc: t('servicesPage.step4Desc'),
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "05",
      title: t('servicesPage.step5Title'),
      desc: t('servicesPage.step5Desc'),
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "06",
      title: t('servicesPage.step6Title'),
      desc: t('servicesPage.step6Desc'),
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <main className="services-page" id="services-page">
      <SEO
        title={t('seo.servicesTitle')}
        description={t('seo.servicesDesc')}
        path="/services"
        image="/images/villa1.jpg"
      />

      {/* Page Header */}
      <section className="hero-minimal" id="services-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">{t('servicesPage.headerSubtitle')}</span>
          <h1 className="hero-minimal__title">{t('servicesPage.headerTitle')}</h1>
          <p className="hero-minimal__text">
            {t('servicesPage.headerText')}
          </p>
        </motion.div>
      </section>

      {/* Video Section – Clean layout matching About page */}
      <section className="section" id="services-video">
        <div className="container">
          <AnimatedSection
            className="services-video-wrapper"
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-xl)",
              padding: "2rem",
            }}
          >
            <div className="services-video-layout">
              {/* Vidéo */}
              <div className="services-video-col">
                <video
                  className="services-presentation-video"
                  src="/videos/coffee-shop.mp4"
                  controls
                  playsInline
                  loop
                  muted
                />
              </div>

              {/* Description */}
              <div className="services-video-desc">
                <span className="section-subtitle">{t('servicesPage.videoSubtitle')}</span>
                <h2 style={{ margin: "0.5rem 0 1rem" }}>
                  {t('servicesPage.videoTitlePart1')}
                  <br />
                  {t('servicesPage.videoTitlePart2')}
                </h2>
                <div className="divider divider-left" />
                <p style={{ lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {t('servicesPage.videoDesc')}
                </p>
                <ul className="services-video-features">
                  <li>{t('servicesPage.videoFeat1')}</li>
                  <li>{t('servicesPage.videoFeat2')}</li>
                  <li>{t('servicesPage.videoFeat3')}</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="section" id="services-list">
        <div className="container">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              className={`services-item ${index % 2 !== 0 ? "services-item--reverse" : ""}`}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="services-item__image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="services-item__content">
                <div className="services-item__icon">{service.icon}</div>
                <h2 className="services-item__title">{service.title}</h2>
                <div className="divider divider-left" />
                <p className="services-item__desc">{service.description}</p>
                <ul className="services-item__features">
                  {service.features.map((f, i) => (
                    <li key={i} className="services-item__feature">
                      <FiCheckCircle className="services-item__feature-icon" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="btn btn-outline"
                  id={`service-cta-${index}`}
                >
                  {t('servicesPage.requestQuoteBtn')} <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process – Premium Vertical Timeline */}
      <section className="section services-process" id="services-process">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-subtitle">{t('servicesPage.processSubtitle')}</span>
            <h2 className="section-title">{t('servicesPage.processTitle')}</h2>
            <p className="section-description">
              {t('servicesPage.processDescription')}
            </p>
          </AnimatedSection>

          <div className="timeline">
            {processSteps.map((step, index) => (
              <TimelineStep
                key={index}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta" id="services-cta">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimatedSection>
            <h2 className="services-cta__title">
              {t('servicesPage.ctaTitle')}
            </h2>
            <p className="services-cta__text">
              {t('servicesPage.ctaText')}
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
              id="services-contact-cta"
            >
              {t('servicesPage.ctaBtn')} <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
