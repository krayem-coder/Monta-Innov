import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import projects from "../data/projects";
import { FiTarget, FiHeart, FiStar, FiAward } from "react-icons/fi";
import "./About.css";

/**
 * About Page – Agency story, philosophy, values, and founder spotlight
 */
const About = () => {
  const values = [
    {
      icon: <FiTarget />,
      title: "Précision",
      description:
        "Chaque détail compte. Nous apportons une attention méticuleuse à chaque aspect de nos réalisations.",
    },
    {
      icon: <FiHeart />,
      title: "Passion",
      description:
        "Notre amour pour le design et l'architecture nous pousse à repousser les limites de la créativité.",
    },
    {
      icon: <FiStar />,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans chaque projet, en utilisant les meilleurs matériaux et techniques.",
    },
    {
      icon: <FiAward />,
      title: "Innovation",
      description:
        "Toujours à la pointe des tendances, nous intégrons les dernières innovations en design intérieur.",
    },
  ];

  return (
    // FIX 1 : <main> avec className (remplace le fragment invalide `<> className=...`)
    <main className="about" id="about-page">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="hero-minimal" id="about-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">À Propos</span>
          <h1 className="hero-minimal__title">Notre Histoire</h1>
          <p className="hero-minimal__text">
            Découvrez la vision et la passion qui animent Innovation Design
          </p>
        </motion.div>
      </section>

      {/* ── Founder Section ─────────────────────────────────────────── */}
      {/* FIX 2 : section déplacée DANS le return (était après le return) */}
      <section className="section about-founder" id="about-founder">
        <div className="container about-founder__grid">
          <AnimatedSection className="about-founder__image" direction="left">
            <div className="about-founder__img-wrapper">
              <img
                src="/images/montacar.jpg"
                alt="Montacar Ben Ayech - Co-Founder Innovation Design"
                className="about-founder__img"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="about-founder__content"
            direction="right"
            delay={0.2}
          >
            <span className="section-subtitle">Co-Founder</span>
            <h2 className="section-title">Montacar Ben Ayech</h2>
            <div className="divider divider-left" />
            <p>
              Architecte d'intérieur passionné et visionnaire, Montacar Ben
              Ayech est le co-fondateur d'Innovation Design. Avec plus d'une
              décennie d'expérience dans le domaine, il a su développer un style
              unique qui marie élégance contemporaine et fonctionnalité.
            </p>
            <p>
              Sa vision créative et son sens aigu du détail ont permis à
              l'agence de se distinguer dans des projets résidentiels et
              commerciaux d'envergure, aussi bien en Tunisie qu'à
              l'international, notamment à Paris.
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
                src={projects[5].images[0]}
                alt="Innovation Design - Projet"
              />
            </div>
            <div className="about-story__img-secondary">
              <img
                src={projects[6].images[0]}
                alt="Innovation Design - Intérieur"
              />
            </div>
            <div className="about-story__badge">
              <span className="about-story__badge-number">2015</span>
              <span className="about-story__badge-text">Fondée</span>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="about-story__content"
            direction="right"
            delay={0.2}
          >
            <span className="section-subtitle">Notre Parcours</span>
            <h2 className="section-title">Une passion devenue expertise</h2>
            <div className="divider divider-left" />
            <p>
              Innovation Design est née de la conviction que chaque espace peut
              devenir un lieu d'inspiration et de bien-être. Fondée par{" "}
              <strong>Montacar Ben Ayech</strong>, notre agence s'est rapidement
              imposée comme une référence en architecture intérieure en Tunisie
              et à l'international.
            </p>
            <p>
              Notre approche se distingue par une écoute attentive des besoins
              de nos clients, une créativité sans limites et un souci permanent
              de la qualité. Nous croyons que le design intérieur est bien plus
              qu'une question d'esthétique — c'est l'art de créer des espaces
              qui racontent une histoire.
            </p>
            <p>
              De la conception à la réalisation, nous accompagnons chaque client
              dans un parcours personnalisé, en veillant à ce que chaque projet
              reflète sa personnalité et ses aspirations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Video + Philosophy Section ──────────────────────────────── */}
      {/* FIX 3 : section dupliquée supprimée — une seule section Philosophie */}
      <section className="section" id="about-video">
        <div className="container">
          <AnimatedSection
            className="about-video-container"
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-xl)",
              padding: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              {/* Vidéo */}
              <div style={{ flex: 1, minWidth: "300px" }}>
                <video
                  className="about-presentation-video"
                  src="/videos/video1.mp4"
                  controls
                  playsInline
                  style={{
                    width: "50%", // AMÉLIORATION : responsive (était 400px fixe)
                    maxWidth: "500px",
                    borderRadius: "var(--radius-lg)",
                    display: "block",
                  }}
                />
              </div>

              {/* Texte Philosophie */}
              <div style={{ flex: 1, minWidth: "300px" }}>
                <span className="section-subtitle">Philosophie</span>
                <h2 style={{ margin: "0.5rem 0 1rem" }}>Notre Vision</h2>
                <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
                  "Le design n'est pas seulement ce à quoi ça ressemble. Le
                  design, c'est comment ça fonctionne."
                </p>
                <p style={{ lineHeight: "1.8", color: "var(--text-muted)" }}>
                  Notre philosophie repose sur l'harmonie entre esthétique et
                  fonctionnalité. Chaque espace que nous concevons est pensé
                  pour être beau, confortable et parfaitement adapté au mode de
                  vie de ses occupants.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Values Section ──────────────────────────────────────────── */}
      <section className="section about-values" id="about-values">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-subtitle">Nos Valeurs</span>
            <h2 className="section-title">Ce qui nous définit</h2>
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
    </main> // FIX 4 : </main> correspondant au <main> d'ouverture
  );
};

export default About;
