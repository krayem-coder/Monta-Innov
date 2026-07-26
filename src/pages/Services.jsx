import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../components/AnimatedSection";
import projects from "../data/projects";
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
            <img src={step.image} alt={step.title} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FiHome />,
      title: "Architecture Intérieure",
      description:
        "Nous concevons des espaces intérieurs qui allient esthétique et fonctionnalité. De la planification spatiale à la sélection des matériaux, chaque détail est pensé pour créer un environnement harmonieux.",
      features: [
        "Planification spatiale",
        "Conception de plans",
        "Sélection de matériaux",
        "Supervision de chantier",
      ],
      image: "/images/villa1.jpg",
    },
    {
      icon: <FiTool />,
      title: "Rénovation",
      description:
        "Transformez votre espace existant en un lieu moderne et fonctionnel. Notre expertise en rénovation couvre tous les aspects, de la démolition à la finition.",
      features: [
        "Rénovation complète",
        "Mise aux normes",
        "Optimisation d'espaces",
        "Finitions haut de gamme",
      ],
      image: "/images/villa1.jpg",
    },
    {
      icon: <FiLayers />,
      title: "Aménagement Sur-Mesure",
      description:
        "Chaque projet est unique. Nous créons des solutions d'aménagement personnalisées, du mobilier sur-mesure aux rangements intégrés.",
      features: [
        "Mobilier sur-mesure",
        "Rangements intégrés",
        "Solutions ergonomiques",
        "Design personnalisé",
      ],
      image: "/images/portfolio/salle-de-bain-marocaine/mar1.jpg",
    },
    {
      icon: <FiMonitor />,
      title: "Design & Modélisation 3D",
      description:
        "Visualisez votre projet avant sa réalisation grâce à nos modélisations 3D photoréalistes. Une immersion complète dans votre futur espace.",
      features: [
        "Rendus photoréalistes",
        "Visites virtuelles",
        "Plans techniques",
        "Moodboards & concepts",
      ],
      image: "/images/villa2.jpg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation Initiale",
      desc: "Réunion pour définir le style, le budget, les délais et l'étude du lieu.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "02",
      title: "Conception",
      desc: "Conception 2D : plan d'aménagement et plans techniques.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "03",
      title: "Conception Détaillée et Spécifications",
      desc: "Réalisation de la conception 3D.",
      image:
        "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "04",
      title: "Approvisionnement",
      desc: "Bordereau estimatif et tarifs d'exécution.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "05",
      title: "Gestion de Projet",
      desc: "Gestion de chantier, planning des travaux, choix des matériaux et suivi de conformité.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      number: "06",
      title: "Livraison du Projet",
      desc: "Livraison finale du projet, conformité avec la conception 3D et service après-vente.",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <main className="services-page" id="services-page">
      {/* Page Header */}
      <section className="hero-minimal" id="services-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">Nos Services</span>
          <h1 className="hero-minimal__title">Ce que nous offrons</h1>
          <p className="hero-minimal__text">
            Des solutions complètes pour transformer vos espaces
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
                <span className="section-subtitle">Présentation</span>
                <h2 style={{ margin: "0.5rem 0 1rem" }}>
                  L'art du design
                  <br />
                  en mouvement
                </h2>
                <div className="divider divider-left" />
                <p style={{ lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  Découvrez notre approche à travers cette présentation
                  visuelle. Chaque projet est une invitation à repenser
                  l'espace, à jouer avec la lumière, les matières et les volumes
                  pour créer un intérieur qui vous ressemble.
                </p>
                <ul className="services-video-features">
                  <li>Conception sur mesure adaptée à votre style de vie</li>
                  <li>
                    Matériaux sélectionnés pour leur qualité et durabilité
                  </li>
                  <li>Suivi de projet de l'esquisse à la livraison</li>
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
                <img src={service.image} alt={service.title} />
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
                  Demander un devis <FiArrowRight />
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
            <span className="section-subtitle">Notre Processus</span>
            <h2 className="section-title">Comment nous travaillons</h2>
            <p className="section-description">
              Un accompagnement complet, de l'idée à la réalisation finale
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
              Vous avez un projet en tête ?
            </h2>
            <p className="services-cta__text">
              Contactez-nous pour une consultation gratuite et personnalisée
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
              id="services-contact-cta"
            >
              Nous Contacter <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
