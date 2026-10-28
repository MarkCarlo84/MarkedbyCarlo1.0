import React from 'react'
import type { BusinessCardConfig } from '../types/businessCard'
import { Award, CheckCircle2, Sparkles } from 'lucide-react'

interface ProfileHeaderProps {
  config: BusinessCardConfig
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ config }) => {
  const hasAvatar = Boolean(config.profileImage?.trim())
  const hasLogo = Boolean(config.logoImage?.trim())
  const hasDescription = Boolean(config.shortDescription?.trim())

  return (
    <header className="card-header">
      {/* Enhanced Black & White Header Banner with Signature Logo */}
      <div className="header-banner">
        <div className="banner-top-sheen" aria-hidden="true" />
        <div className="banner-ambient-overlay" aria-hidden="true" />
        <div className="banner-grid-pattern" aria-hidden="true" />

        {/* Minimalist Top Meta Badge */}
        <div className="banner-meta-tag">
          <Sparkles size={11} className="meta-sparkle-icon" aria-hidden="true" />
          <span>NFC Digital Card</span>
        </div>

        {/* Prominent MarkedbyCarlo Signature Calligraphy Logo (Crisp Transparent PNG) */}
        {hasLogo && (
          <div className="banner-logo-wrapper">
            <img
              src="/images/markedbycarlo-logo-white.png"
              alt={config.businessName || config.fullName}
              className="banner-brand-logo logo-dark-theme"
              loading="eager"
            />
            <img
              src="/images/markedbycarlo-logo.png"
              alt={config.businessName || config.fullName}
              className="banner-brand-logo logo-light-theme"
              loading="eager"
            />
          </div>
        )}
      </div>

      {/* Overlapping Profile Avatar Frame */}
      <div className="avatar-overlap-container">
        {hasAvatar && (
          <div className="avatar-frame">
            <img
              src={config.profileImage}
              alt={config.fullName}
              className="avatar-image"
              loading="eager"
            />
            {/* Verified Graduate Ribbon Badge (Black & White Luxe) */}
            <div className="graduate-verified-badge" title="Verified BSIT Graduate">
              <CheckCircle2 size={16} strokeWidth={2.5} aria-hidden="true" />
            </div>
          </div>
        )}
      </div>

      {/* Primary Identity Information */}
      <div className="identity-block">
        <div className="name-row">
          <h1 className="owner-name">{config.fullName}</h1>
        </div>

        {config.displayName && config.displayName !== config.fullName && (
          <span className="owner-real-name">{config.displayName}</span>
        )}

        <div className="title-stack">
          {config.professionalTitle?.trim() && (
            <p className="owner-title">{config.professionalTitle}</p>
          )}

          <div className="graduate-tag-pill">
            <Award size={13} className="award-icon" aria-hidden="true" />
            <span>Information Technology Graduate</span>
          </div>
        </div>

        {hasDescription && (
          <p className="owner-bio">{config.shortDescription}</p>
        )}
      </div>
    </header>
  )
}
