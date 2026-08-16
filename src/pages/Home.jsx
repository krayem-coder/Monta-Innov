import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import projects from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { FiArrowRight } from 'react-icons/fi';
import './Home.css';

/**
 * Home Page – Hero, About preview, Featured projects, Stats, CTA, Bilingual FR/EN & Advanced SEO
 */
const Home = () => {
  const { language, t } = useLanguage();

  // Featured projects list: Villa R (our main showcase!), Villa J, Villa N
  const featuredProjects = projects.filter((p) => ['villa-r', 'villa-j', 'villa-n'].includes(p.id));
  
  // Get intro second image (Villa R cover or Villa N)
  const introSecondImage = projects.find((p) => p.id === 'villa-r')?.coverImage || '/images/portfolio/villa-r/r5.jpg';

  return (
    <main className="home" id="home-page">
      <SEO
        title={t('seo.homeTitle')}
        description={t('seo.homeDesc')}
        path="/"
        image="/images/villa1.jpg"
      />

      {/* ===== PREMIUM HERO ===== */}
      <section className="home-hero" id="hero-section">
        <div className="home-hero__container container">
          <div className="home-hero__content">
            <motion.span
              className="home-hero__label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.label')}
            </motion.span>
            <motion.h1
              className="home-hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              {t('hero.titlePart1')}
              <span className="home-hero__title-accent">{t('hero.titleAccent')}</span>
              {t('hero.titlePart2')}
            </motion.h1>
            <motion.p
              className="home-hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              className="home-hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to="/projects" className="btn btn-primary" id="hero-cta-projects">
                {t('hero.projectsBtn')}
                <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline" id="hero-cta-contact">
                {t('hero.contactBtn')}
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="home-hero__visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="home-hero__image-wrapper">
              <img
                src="/images/villa1.jpg"
                alt="Innovation Design - Architecture Intérieure et Design Tunisie"
                className="home-hero__image"
                width="600"
                height="800"
              />
            </div>
            <div className="home-hero__badge">
              <span className="home-hero__badge-number">{t('hero.yearsBadgeNumber')}</span>
              <span className="home-hero__badge-text">{t('hero.yearsBadgeText')}</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="home-hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span>{t('hero.scrollTag')}</span>
          <div className="home-hero__scroll-line" />
        </motion.div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="section home-intro" id="home-intro">
        <div className="container">
          <div className="home-intro__grid">
            <AnimatedSection className="home-intro__left" direction="left">
              <span className="section-subtitle">{t('intro.subtitle')}</span>
              <h2 className="section-title">{t('intro.title')}</h2>
              <div className="divider divider-left" />
              <p className="home-intro__text">
                {t('intro.text1')}
              </p>
              <p className="home-intro__text">
                {t('intro.text2')}
              </p>
              <Link to="/about" className="btn btn-outline home-intro__btn" id="intro-cta">
                {t('intro.moreBtn')}
                <FiArrowRight />
              </Link>
            </AnimatedSection>

            <AnimatedSection className="home-intro__right" direction="right" delay={0.2}>
              <div className="home-intro__image-grid">
                <div className="home-intro__img-wrapper home-intro__img-wrapper--large">
                  <img
                    src="/images/villa2.jpg"
                    alt="Innovation Design - Realisation Villa de Luxe"
                    className="home-intro__img"
                    loading="lazy"
                  />
                </div>
                <div className="home-intro__img-wrapper home-intro__img-wrapper--small">
                  <img
                    src={introSecondImage}
                    alt="Innovation Design - Salon contemporain Villa R"
                    className="home-intro__img"
                    loading="lazy"
                  />
                </div>
                <div className="home-intro__experience">
                  <span className="home-intro__exp-number">{t('intro.yearsExpNumber')}</span>
                  <span className="home-intro__exp-text">{t('intro.yearsExpText')}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section home-projects" id="home-projects">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-subtitle">{t('featured.subtitle')}</span>
            <h2 className="section-title">{t('featured.title')}</h2>
            <p className="section-description">
              {t('featured.description')}
            </p>
          </AnimatedSection>

          <div className="home-projects__grid">
            {featuredProjects.map((project, index) => {
              const displayTitle = language === 'en' && project.titleEn ? project.titleEn : project.title;
              const displayCategory = language === 'en' && project.categoryEn ? project.categoryEn : project.category;
              const coverImg = project.coverImage || project.images[0];
              const altText = project.imageAlts ? (language === 'en' ? project.imageAlts[0]?.en : project.imageAlts[0]?.fr) : displayTitle;

              return (
                <AnimatedSection key={project.id} delay={index * 0.15}>
                  <Link to="/projects" className="home-projects__card" id={`featured-${project.id}`}>
                    <div className="home-projects__card-img">
                      <img
                        src={coverImg}
                        alt={altText}
                        loading="lazy"
                      />
                      <div className="home-projects__card-overlay">
                        <span className="home-projects__card-category">{displayCategory}</span>
                        <h3 className="home-projects__card-title">{displayTitle}</h3>
                        <span className="home-projects__card-cta">
                          {t('featured.viewProject')} <FiArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="home-projects__more" delay={0.3}>
            <Link to="/projects" className="btn btn-outline" id="view-all-projects">
              {t('featured.viewAllBtn')}
              <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="home-stats" id="home-stats">
        <div className="container home-stats__container">
          {[
            { number: '50+', label: t('stats.projectsDone') },
            { number: '10+', label: t('stats.yearsExp') },
            { number: '100%', label: t('stats.satisfiedClients') },
            { number: '3', label: t('stats.countries') },
          ].map((stat, index) => (
            <AnimatedSection key={index} className="home-stats__item" delay={index * 0.1}>
              <span className="home-stats__number">{stat.number}</span>
              <span className="home-stats__label">{stat.label}</span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section home-cta" id="home-cta">
        <div className="container home-cta__content">
          <AnimatedSection>
            <span className="section-subtitle">
              {t('ctaBottom.subtitle')}
            </span>
            <h2 className="home-cta__title">{t('ctaBottom.title')}</h2>
            <p className="home-cta__text">
              {t('ctaBottom.text')}
            </p>
            <Link to="/contact" className="btn btn-primary" id="cta-contact-bottom">
              {t('ctaBottom.contactBtn')}
              <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Home;
