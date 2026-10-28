import React, { useState } from 'react'
import type { BusinessCardConfig } from '../types/businessCard'
import { GraduationCap, Code, CheckCircle, Sparkles, User } from 'lucide-react'

interface GraduateProfileSectionProps {
  config: BusinessCardConfig
}

export const GraduateProfileSection: React.FC<GraduateProfileSectionProps> = ({ config }) => {
  const profile = config.profileInfo
  const [selectedPhoto, setSelectedPhoto] = useState<string>(config.profileImage || '/images/carlo-profile.jpg')

  // Available graduation portraits uploaded by the user
  const portraits = [
    { id: 'crossed', src: '/images/carlo-profile.jpg', label: 'Classic' },
    { id: 'chin', src: '/images/carlo-grad-pose.jpg', label: 'Editorial' },
    { id: 'cap', src: '/images/carlo-grad-cap.jpg', label: 'Cap & Gown' },
  ]

  if (!profile) return null

  return (
    <section className="profile-details-section" aria-label="IT Graduate Profile">
      {/* Section Header */}
      <div className="section-header-compact">
        <div className="section-header-title">
          <GraduationCap size={16} className="section-header-icon" aria-hidden="true" />
          <h2 className="section-heading">Graduate Profile</h2>
        </div>
        <span className="degree-badge">BSIT</span>
      </div>

      <div className="profile-card-inner">
        {/* Academic Degree Info */}
        <div className="degree-summary-box">
          <div className="degree-icon-box">
            <Sparkles size={18} strokeWidth={2} />
          </div>
          <div className="degree-text-content">
            <h3 className="degree-name">{profile.degree}</h3>
            <p className="specialization-text">{profile.specialization}</p>
          </div>
        </div>

        {/* Professional Bio */}
        <p className="profile-bio-text">{profile.bio}</p>

        {/* Technical Competencies Grid */}
        <div className="competencies-block">
          <h4 className="competencies-title">
            <Code size={14} aria-hidden="true" />
            Core Competencies
          </h4>
          <div className="competencies-list">
            {profile.highlights.map((item, index) => (
              <div key={index} className="competency-item">
                <CheckCircle size={13} className="check-icon" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Graduation Portraits Switcher */}
        <div className="portraits-selector-box">
          <div className="portraits-selector-header">
            <User size={13} aria-hidden="true" />
            <span>Graduation Poses</span>
          </div>
          <div className="portraits-thumbnails-row">
            {portraits.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`portrait-thumb-btn ${selectedPhoto === p.src ? 'thumb-active' : ''}`}
                onClick={() => setSelectedPhoto(p.src)}
                aria-label={`View ${p.label} pose`}
                title={p.label}
              >
                <img src={p.src} alt={p.label} className="portrait-thumb-img" />
                <span className="thumb-label">{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
