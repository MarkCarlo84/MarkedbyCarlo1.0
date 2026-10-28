import React from 'react'
import type { BusinessCardConfig } from '../types/businessCard'
import { ProfileHeader } from './ProfileHeader'
import { CardActions } from './CardActions'
import { GraduateProfileSection } from './GraduateProfileSection'
import { ProjectsCarousel } from './ProjectsCarousel'
import { ContactDetails } from './ContactDetails'
import { SocialLinks } from './SocialLinks'
import { Footer } from './Footer'
import { Sun, Moon } from 'lucide-react'

interface BusinessCardProps {
  config: BusinessCardConfig
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onToast: (message: string) => void
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  config,
  theme,
  onToggleTheme,
  onToast,
}) => {
  return (
    <article className="business-card-root">
      {/* Subtle Card Border Highlight and Reflection Sheen */}
      <div className="card-ambient-border" aria-hidden="true" />

      {/* Discreet Theme Switcher */}
      <button
        type="button"
        className="theme-toggle-btn"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun size={15} strokeWidth={2.2} />
        ) : (
          <Moon size={15} strokeWidth={2.2} />
        )}
      </button>

      {/* Full-Bleed Profile Header (Banner & Avatar) */}
      <ProfileHeader config={config} />

      {/* Card Content Body with Consistent Padding */}
      <div className="card-content-body">
        {/* Primary Action Buttons (Save Contact & Share) */}
        <CardActions config={config} onToast={onToast} />

        {/* Dedicated IT Graduate Profile & Competencies Section */}
        {config.profileInfo && (
          <GraduateProfileSection config={config} />
        )}

        {/* Dedicated Projects Showcase Carousel */}
        {config.projects && config.projects.length > 0 && (
          <ProjectsCarousel projects={config.projects} />
        )}

        {/* Contact Details (Phone, Email, Location) */}
        <ContactDetails config={config} />

        {/* Social Media & Developer Links (GitHub, Instagram, Facebook) */}
        <SocialLinks config={config} />

        {/* Minimal Footer */}
        <Footer config={config} />
      </div>
    </article>
  )
}
