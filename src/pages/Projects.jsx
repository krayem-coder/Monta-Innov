import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";
import projects from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiCalendar,
  FiArrowRight,
  FiMaximize2,
} from "react-icons/fi";
import "./Projects.css";

/**
 * Projects Page – Portfolio grid with category filter, enhanced lightbox gallery & bilingual FR/EN SEO
 */
const Projects = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Category mapping
  const categoryKeys = [
    { key: "all", label: t('projectsPage.allFilter') },
    { key: "Architecture Intérieure", label: t('projectsPage.interiorArchFilter') },
    { key: "Rénovation", label: t('projectsPage.renovationFilter') },
    { key: "Aménagement Sur-Mesure", label: t('projectsPage.customFitoutFilter') },
    { key: "Design & Modélisation 3D", label: t('projectsPage.design3dFilter') },
  ];

  // Filter projects
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Lightbox handlers
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsFullscreen(false);
    document.body.style.overflow = "hidden";
  };

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setIsFullscreen(false);
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "Escape") {
        closeProject();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, closeProject, nextImage, prevImage]);

  return (
    <main className="projects-page" id="projects-page">
      <SEO
        title={t('seo.projectsTitle')}
        description={t('seo.projectsDesc')}
        path="/projects"
        image={projects[0]?.images[0] || "/images/villa1.jpg"}
      />

      {/* Page Header */}
      <section className="hero-minimal" id="projects-hero">
        <motion.div
          className="container hero-minimal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-subtitle">{t('projectsPage.headerSubtitle')}</span>
          <h1 className="hero-minimal__title">{t('projectsPage.headerTitle')}</h1>
          <p className="hero-minimal__text">
            {t('projectsPage.headerText')}
          </p>
        </motion.div>
      </section>

      {/* Filter & Grid */}
      <section className="section" id="projects-gallery">
        <div className="container">
          {/* Category Filter Buttons */}
          <AnimatedSection className="projects-filter">
            {categoryKeys.map((cat) => (
              <button
                key={cat.key}
                className={`projects-filter__btn ${filter === cat.key ? "projects-filter__btn--active" : ""}`}
                onClick={() => setFilter(cat.key)}
                id={`filter-${cat.key.toLowerCase().replace(/\s|&/g, "-")}`}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const displayTitle = language === 'en' && project.titleEn ? project.titleEn : project.title;
                const displayCategory = language === 'en' && project.categoryEn ? project.categoryEn : project.category;
                const coverImg = project.coverImage || project.images[0];
                const cardAlt = project.imageAlts ? (language === 'en' ? project.imageAlts[0]?.en : project.imageAlts[0]?.fr) : displayTitle;

                return (
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
                      <img
                        src={coverImg}
                        alt={cardAlt}
                        loading="lazy"
                      />
                      <div className="projects-card__overlay">
                        <span className="projects-card__category">
                          {displayCategory}
                        </span>
                        <h3 className="projects-card__title">{displayTitle}</h3>
                        <span className="projects-card__view">
                          {t('projectsPage.viewProjectBtn')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const displayTitle = language === 'en' && selectedProject.titleEn ? selectedProject.titleEn : selectedProject.title;
          const displayCategory = language === 'en' && selectedProject.categoryEn ? selectedProject.categoryEn : selectedProject.category;
          const displayDesc = language === 'en' && selectedProject.descriptionEn ? selectedProject.descriptionEn : selectedProject.description;
          const displayLoc = language === 'en' && selectedProject.locationEn ? selectedProject.locationEn : selectedProject.location;

          const currentAlt = selectedProject.imageAlts && selectedProject.imageAlts[currentImageIndex]
            ? (language === 'en' ? selectedProject.imageAlts[currentImageIndex].en : selectedProject.imageAlts[currentImageIndex].fr)
            : `${displayTitle} - Image ${currentImageIndex + 1}`;

          return (
            <motion.div
              className={`lightbox ${isFullscreen ? 'lightbox--fullscreen' : ''}`}
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
                {/* Close Button */}
                <button
                  className="lightbox__close"
                  onClick={closeProject}
                  aria-label={t('projectsPage.lightboxCloseLabel')}
                  id="lightbox-close"
                >
                  <FiX />
                </button>

                {/* Main Image View Section */}
                <div className="lightbox__image-section">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]}
                    alt={currentAlt}
                    className="lightbox__image"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  />

                  {/* Fullscreen toggle button */}
                  <button
                    className="lightbox__fullscreen-btn"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    title="Zoom / Fullscreen"
                    aria-label="Toggle Fullscreen"
                  >
                    <FiMaximize2 />
                  </button>

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="lightbox__arrow lightbox__arrow--prev"
                        onClick={prevImage}
                        aria-label={t('projectsPage.lightboxPrevLabel')}
                      >
                        <FiChevronLeft />
                      </button>
                      <button
                        className="lightbox__arrow lightbox__arrow--next"
                        onClick={nextImage}
                        aria-label={t('projectsPage.lightboxNextLabel')}
                      >
                        <FiChevronRight />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="lightbox__counter">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Caption / Alt text bar */}
                  <div className="lightbox__caption">
                    <p>{currentAlt}</p>
                  </div>
                </div>

                {/* Project Details Info Section */}
                <div className="lightbox__info">
                  <span className="lightbox__category">
                    {displayCategory}
                  </span>
                  <h2 className="lightbox__title">{displayTitle}</h2>
                  <p className="lightbox__desc">{displayDesc}</p>
                  <div className="lightbox__meta">
                    <span className="lightbox__meta-item">
                      <FiMapPin /> {displayLoc}
                    </span>
                    <span className="lightbox__meta-item">
                      <FiCalendar /> {selectedProject.year}
                    </span>
                  </div>

                  {/* Thumbnails Gallery */}
                  <div className="lightbox__thumbs">
                    {selectedProject.images.map((img, i) => {
                      const thumbAlt = selectedProject.imageAlts && selectedProject.imageAlts[i]
                        ? (language === 'en' ? selectedProject.imageAlts[i].en : selectedProject.imageAlts[i].fr)
                        : `${t('projectsPage.lightboxThumbnailAlt')} ${i + 1}`;

                      return (
                        <button
                          key={i}
                          className={`lightbox__thumb ${i === currentImageIndex ? "lightbox__thumb--active" : ""}`}
                          onClick={() => setCurrentImageIndex(i)}
                          aria-label={`Select photo ${i + 1}`}
                        >
                          <img src={img} alt={thumbAlt} loading="lazy" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* CTA */}
      <section className="section services-cta" id="services-cta">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimatedSection>
            <h2 className="services-cta__title">
              {t('projectsPage.ctaTitle')}
            </h2>
            <p className="services-cta__text">
              {t('projectsPage.ctaText')}
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
              id="services-contact-cta"
            >
              {t('projectsPage.ctaBtn')} <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Projects;
