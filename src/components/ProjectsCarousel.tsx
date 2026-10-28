import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Code2, Layers } from 'lucide-react'
import type { ProjectItem } from '../types/businessCard'

interface ProjectsCarouselProps {
  projects?: ProjectItem[]
}

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const items = projects || []
  const total = items.length

  const handleNext = useCallback(() => {
    if (total <= 1) return
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const handlePrev = useCallback(() => {
    if (total <= 1) return
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Automatic gentle carousel advance every 4.5s unless hovered or interacted with
  useEffect(() => {
    if (total <= 1 || isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, 4500)

    return () => clearInterval(interval)
  }, [total, isPaused, handleNext])

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false)
      return
    }

    const distance = touchStartX.current - touchEndX.current
    const isSwipeLeft = distance > 45
    const isSwipeRight = distance < -45

    if (isSwipeLeft) {
      handleNext()
    } else if (isSwipeRight) {
      handlePrev()
    }

    touchStartX.current = null
    touchEndX.current = null
    setIsPaused(false)
  }

  if (total === 0) return null

  const activeProject = items[currentIndex]

  return (
    <section
      className="projects-section"
      aria-roledescription="carousel"
      aria-label="IT Projects Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Section Header */}
      <div className="projects-header">
        <div className="projects-title-box">
          <Layers size={16} className="projects-header-icon" aria-hidden="true" />
          <h2 className="projects-title">Featured Projects</h2>
        </div>
        <span className="projects-counter" aria-live="polite">
          {currentIndex + 1} / {total}
        </span>
      </div>

      {/* Carousel Track Container */}
      <div className="carousel-track-wrapper">
        <div className="carousel-card-container">
          <article className="project-card" key={activeProject.id}>
            {/* Project Preview Image */}
            {activeProject.image && (
              <div className="project-image-box">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="project-image"
                  loading="lazy"
                />
                <span className="project-category-badge">
                  {activeProject.category}
                </span>
              </div>
            )}

            {/* Project Content */}
            <div className="project-content">
              <div className="project-title-row">
                <h3 className="project-title">{activeProject.title}</h3>
                {activeProject.linkUrl && (
                  <a
                    href={activeProject.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    aria-label={`View ${activeProject.title} project`}
                    title="View Project"
                  >
                    <ExternalLink size={15} strokeWidth={2.2} />
                  </a>
                )}
              </div>

              <p className="project-description">{activeProject.description}</p>

              {/* Technology Stack Tags */}
              {activeProject.tags && activeProject.tags.length > 0 && (
                <div className="project-tags-list" aria-label="Technologies Used">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      <Code2 size={11} className="tag-icon" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>

        {/* Carousel Prev / Next Arrow Controls */}
        {total > 1 && (
          <div className="carousel-nav-arrows">
            <button
              type="button"
              className="carousel-arrow carousel-arrow-left"
              onClick={handlePrev}
              aria-label="Previous project slide"
              title="Previous project"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNext}
              aria-label="Next project slide"
              title="Next project"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        )}
      </div>

      {/* Pagination Indicator Dots */}
      {total > 1 && (
        <div className="carousel-pagination" role="tablist" aria-label="Project Slides">
          {items.map((project, idx) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              className={`carousel-dot ${idx === currentIndex ? 'dot-active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${project.title}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
