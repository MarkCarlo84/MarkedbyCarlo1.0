import React from 'react'
import type { BusinessCardConfig } from '../types/businessCard'

interface SocialLinksProps {
  config: BusinessCardConfig
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ config }) => {
  const facebookUrl = config.facebookUrl?.trim()
  const instagramUrl = config.instagramUrl?.trim()
  const githubUrl = config.githubUrl?.trim()

  const hasFacebook = Boolean(facebookUrl)
  const hasInstagram = Boolean(instagramUrl)
  const hasGithub = Boolean(githubUrl)

  // Only render if at least one platform is configured
  if (!hasFacebook && !hasInstagram && !hasGithub) {
    return null
  }

  const count = [hasGithub, hasInstagram, hasFacebook].filter(Boolean).length

  return (
    <section className="social-links-section" aria-label="Social & Developer Profiles">
      <div className={`social-buttons-grid ${count === 3 ? 'grid-triple' : count === 2 ? 'grid-dual' : 'grid-single'}`}>
        {/* GitHub Button */}
        {hasGithub && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-github"
            aria-label={`Visit ${config.fullName}'s GitHub profile`}
          >
            <span className="social-btn-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </span>
            <span className="social-btn-text">GitHub</span>
          </a>
        )}

        {/* Instagram Button */}
        {hasInstagram && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-instagram"
            aria-label={`Visit ${config.fullName}'s Instagram profile`}
          >
            <span className="social-btn-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </span>
            <span className="social-btn-text">Instagram</span>
          </a>
        )}

        {/* Facebook Button */}
        {hasFacebook && (
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-facebook"
            aria-label={`Visit ${config.fullName}'s Facebook profile`}
          >
            <span className="social-btn-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
            <span className="social-btn-text">Facebook</span>
          </a>
        )}
      </div>
    </section>
  )
}
