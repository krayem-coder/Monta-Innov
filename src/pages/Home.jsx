import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import projects from '../data/projects';
import { FiArrowRight } from 'react-icons/fi';
import './Home.css';

/**
 * Home Page – Hero, About preview, Featured projects, Stats, CTA
 */
const Home = () => {
  // Show first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="home" id="home-page">
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
              Architecture Intérieure & Design
            </motion.span>
            <motion.h1
              className="home-hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Nous créons des
              <span className="home-hero__title-accent"> espaces </span>
              qui inspirent
            </motion.h1>
            <motion.p
              className="home-hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Innovation Design transforme vos idées en réalités architecturales 
              d'exception. Chaque projet est une œuvre unique, pensée pour sublimer votre quotidien.
            </motion.p>
            <motion.div
              className="home-hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to="/projects" className="btn btn-primary" id="hero-cta-projects">
                Découvrir nos Projets
                <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline" id="hero-cta-contact">
                Nous Contacter
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
                src={projects[0].images[0]}
                alt="Innovation Design – Projet phare"
                className="home-hero__image"
              />
            </div>
            <div className="home-hero__badge">
              <span className="home-hero__badge-number">10+</span>
              <span className="home-hero__badge-text">Années d'excellence</span>
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
          <span>MBA</span>
          <div className="home-hero__scroll-line" />
        </motion.div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="section home-intro" id="home-intro">
        <div className="container">
          <div className="home-intro__grid">
            <AnimatedSection className="home-intro__left" direction="left">
              <span className="section-subtitle">Bienvenue</span>
              <h2 className="section-title">Innovation Design</h2>
              <div className="divider divider-left" />
              <p className="home-intro__text">
                Fondée par <strong>Montacar Ben Ayech</strong>, Innovation Design est une agence 
                d'architecture intérieure basée en Tunisie, spécialisée dans la conception 
                d'espaces résidentiels et commerciaux haut de gamme.
              </p>
              <p className="home-intro__text">
                Notre approche unique combine créativité, fonctionnalité et élégance 
                pour créer des intérieurs qui reflètent la personnalité de chaque client.
              </p>
              <Link to="/about" className="btn btn-outline home-intro__btn" id="intro-cta">
                En savoir plus
                <FiArrowRight />
              </Link>
            </AnimatedSection>

            <AnimatedSection className="home-intro__right" direction="right" delay={0.2}>
              <div className="home-intro__image-grid">
                <div className="home-intro__img-wrapper home-intro__img-wrapper--large">
                  <img
                    src={projects[2].images[0]}
                    alt="Innovation Design projet"
                    className="home-intro__img"
                  />
                </div>
                <div className="home-intro__img-wrapper home-intro__img-wrapper--small">
                  <img
                    src={projects[1].images[0]}
                    alt="Innovation Design intérieur"
                    className="home-intro__img"
                  />
                </div>
                <div className="home-intro__experience">
                  <span className="home-intro__exp-number">10+</span>
                  <span className="home-intro__exp-text">Années d'expérience</span>
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
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">Projets Récents</h2>
            <p className="section-description">
              Découvrez nos réalisations les plus récentes, alliant design contemporain 
              et savoir-faire artisanal.
            </p>
          </AnimatedSection>

          <div className="home-projects__grid">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.15}>
                <Link to="/projects" className="home-projects__card" id={`featured-${project.id}`}>
                  <div className="home-projects__card-img">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                    />
                    <div className="home-projects__card-overlay">
                      <span className="home-projects__card-category">{project.category}</span>
                      <h3 className="home-projects__card-title">{project.title}</h3>
                      <span className="home-projects__card-cta">
                        Voir le projet <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="home-projects__more" delay={0.3}>
            <Link to="/projects" className="btn btn-outline" id="view-all-projects">
              Voir tous les projets
              <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="home-stats" id="home-stats">
        <div className="container home-stats__container">
          {[
            { number: '50+', label: 'Projets Réalisés' },
            { number: '10+', label: 'Années d\'Expérience' },
            { number: '100%', label: 'Clients Satisfaits' },
            { number: '3', label: 'Pays d\'Intervention' },
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
              Votre Projet
            </span>
            <h2 className="home-cta__title">Prêt à donner vie à vos idées ?</h2>
            <p className="home-cta__text">
              Chaque espace mérite d'être exceptionnel. Parlons de votre projet et 
              créons ensemble un intérieur qui vous ressemble.
            </p>
            <Link to="/contact" className="btn btn-primary" id="cta-contact-bottom">
              Nous Contacter
              <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Home;
