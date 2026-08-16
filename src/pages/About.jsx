import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";
import { FiTarget, FiHeart, FiStar, FiAward } from "react-icons/fi";
import "./About.css";

/**
 * About Page – Agency story, philosophy, values, founder spotlight, FR/EN bilingual & SEO
 */
const About = () => {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: <FiTarget />,
      title: t('about.valPrecisionTitle'),
      description: t('about.valPrecisionDesc'),
    },
    {
      icon: <FiHeart />,
      title: t('about.valPassionTitle'),
      description: t('about.valPassionDesc'),
    },
    {
      icon: <FiStar />,
      title: t('about.valExcellenceTitle'),
      description: t('about.valExcellenceDesc'),
    },
    {
      icon: <FiAward />,
      title: t('about.valInnovationTitle'),
      description: t('about.valInnovationDesc'),
    },
  ];

  return (
    <main className="about" id="about-page">
      <SEO
        title={t('seo.aboutTitle')}
        description={t('seo.aboutDesc')}
        path="/about"
        image="/images/monta1.jpg"
      />

      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="hero-minimal" id="about-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">{t('about.headerSubtitle')}</span>
          <h1 className="hero-minimal__title">{t('about.headerTitle')}</h1>
          <p className="hero-minimal__text">
            {t('about.headerText')}
          </p>
        </motion.div>
      </section>

      {/* ── Founder Section ─────────────────────────────────────────── */}
      <section className="section about-founder" id="about-founder">
        <div className="container about-founder__grid">
          <AnimatedSection className="about-founder__image" direction="left">
            <div className="about-founder__img-wrapper">
              <img
                src="/images/monta1.jpg"
                alt="Montassar Ben Ayech - Fondateur Innovation Design Tunisie"
                className="about-founder__img"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="about-founder__content"
            direction="right"
            delay={0.2}
          >
            <span className="section-subtitle">{t('about.founderRole')}</span>
            <h2 className="section-title">{t('about.founderName')}</h2>
            <div className="divider divider-left" />
            <p>
              {t('about.founderBio1')}
            </p>
            <p>
              {t('about.founderBio2')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story Section ───────────────────────────────────────────── */}
      <section className="section about-story" id="about-story">
        <div className="container about-story__grid">
          <AnimatedSection className="about-story__images" direction="left">
            <div className="about-story__img-main">
              <img
                src="/images/monta3.jpg"
                alt="Montassar Ben Ayech - Parcours et Vision Architecture"
                loading="lazy"
              />
            </div>
            <div className="about-story__img-secondary">
              <img
                src="/images/monta4.jpg"
                alt="Montassar Ben Ayech - Présentation Projets d'Intérieur"
                loading="lazy"
              />
            </div>
            <div className="about-story__badge">
              <span className="about-story__badge-number">2015</span>
              <span className="about-story__badge-text">{t('about.foundedBadge')}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="about-story__content"
            direction="right"
            delay={0.2}
          >
            <span className="section-subtitle">{t('about.storySubtitle')}</span>
            <h2 className="section-title">{t('about.storyTitle')}</h2>
            <div className="divider divider-left" />
            <p>
              {t('about.storyText1')}
            </p>
            <p>
              {t('about.storyText2')}
            </p>
            <p>
              {t('about.storyText3')}
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* ── Video + Philosophy Section ──────────────────────────────── */}
      <section className="section" id="about-video">
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
                  src="/videos/video1.mp4"
                  controls
                  playsInline
                  loop
                  muted
                />
              </div>

              {/* Texte Philosophie */}
              <div className="services-video-desc">
                <span className="section-subtitle">{t('about.philosophySubtitle')}</span>
                <h2 style={{ margin: "0.5rem 0 1rem" }}>{t('about.philosophyTitle')}</h2>
                <div className="divider divider-left" />
                <p style={{ lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  {t('about.philosophyDesc')}
                </p>
                <ul className="services-video-features">
                  <li>{t('about.philosophyFeature1')}</li>
                  <li>{t('about.philosophyFeature2')}</li>
                  <li>{t('about.philosophyFeature3')}</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Values Section ──────────────────────────────────────────── */}
      <section className="section about-values" id="about-values">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-subtitle">{t('about.valuesSubtitle')}</span>
            <h2 className="section-title">{t('about.valuesTitle')}</h2>
          </AnimatedSection>

          <div className="about-values__grid">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                className="about-values__card"
                delay={index * 0.1}
              >
                <div className="about-values__icon">{value.icon}</div>
                <h3 className="about-values__title">{value.title}</h3>
                <p className="about-values__desc">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
