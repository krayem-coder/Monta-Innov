import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import projects from "../data/projects";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";
import "./Projects.css";

/**
 * Projects Page – Portfolio grid with filter and lightbox modal
 */
const Projects = () => {
  const [filter, setFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique categories
  const categories = ["Tous", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Lightbox handlers
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  };

  return (
    <main className="projects-page" id="projects-page">
      {/* Page Header */}
      <section className="hero-minimal" id="projects-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">Portfolio</span>
          <h1 className="hero-minimal__title">Nos Projets</h1>
          <p className="hero-minimal__text">
            Explorez nos réalisations en architecture intérieure et design
          </p>
        </motion.div>
      </section>

      {/* Filter & Grid */}
      <section className="section" id="projects-gallery">
        <div className="container">
          {/* Category Filter */}
          <AnimatedSection className="projects-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`projects-filter__btn ${filter === cat ? "projects-filter__btn--active" : ""}`}
                onClick={() => setFilter(cat)}
                id={`filter-${cat.toLowerCase().replace(/\s|&/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="projects-card"
                  onClick={() => openProject(project)}
                  id={`project-card-${project.id}`}
                >
                  <div className="projects-card__img">
                    <img src={project.images[0]} alt={project.title} />
                    <div className="projects-card__overlay">
                      <span className="projects-card__category">
                        {project.category}
                      </span>
                      <h3 className="projects-card__title">{project.title}</h3>
                      <span className="projects-card__view">
                        Voir le projet →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            id="project-lightbox"
          >
            <motion.div
              className="lightbox__content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="lightbox__close"
                onClick={closeProject}
                aria-label="Fermer"
                id="lightbox-close"
              >
                <FiX />
              </button>

              {/* Image Section */}
              <div className="lightbox__image-section">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="lightbox__image"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="lightbox__arrow lightbox__arrow--prev"
                      onClick={prevImage}
                      aria-label="Image précédente"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      className="lightbox__arrow lightbox__arrow--next"
                      onClick={nextImage}
                      aria-label="Image suivante"
                    >
                      <FiChevronRight />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="lightbox__counter">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Info Section */}
              <div className="lightbox__info">
                <span className="lightbox__category">
                  {selectedProject.category}
                </span>
                <h2 className="lightbox__title">{selectedProject.title}</h2>
                <p className="lightbox__desc">{selectedProject.description}</p>
                <div className="lightbox__meta">
                  <span className="lightbox__meta-item">
                    <FiMapPin /> {selectedProject.location}
                  </span>
                  <span className="lightbox__meta-item">
                    <FiCalendar /> {selectedProject.year}
                  </span>
                </div>

                {/* Thumbnails */}
                <div className="lightbox__thumbs">
                  {selectedProject.images.map((img, i) => (
                    <button
                      key={i}
                      className={`lightbox__thumb ${i === currentImageIndex ? "lightbox__thumb--active" : ""}`}
                      onClick={() => setCurrentImageIndex(i)}
                    >
                      <img src={img} alt={`Miniature ${i + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Projects;
