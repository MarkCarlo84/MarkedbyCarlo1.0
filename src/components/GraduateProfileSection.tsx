import React from 'react'
import type { BusinessCardConfig } from '../types/businessCard'
import { GraduationCap, Check } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

interface GraduateProfileSectionProps {
  config: BusinessCardConfig
  index: string
  activePortrait: string
  onSelectPortrait: (src: string) => void
}

// Available graduation portraits uploaded by the user
const portraits = [
  { id: 'crossed', src: '/images/carlo-profile.jpg', label: 'Classic' },
  { id: 'chin', src: '/images/carlo-grad-pose.jpg', label: 'Editorial' },
  { id: 'cap', src: '/images/carlo-grad-cap.jpg', label: 'Cap & Gown' },
]

export const GraduateProfileSection: React.FC<GraduateProfileSectionProps> = ({
  config,
  index,
  activePortrait,
  onSelectPortrait,
}) => {
  const profile = config.profileInfo
  if (!profile) return null

  return (
    <section className="panel profile-panel" aria-labelledby="profile-heading">
      <SectionHeader
        index={index}
        title="Graduate"
        accent="Profile"
        id="profile-heading"
        meta={<span className="meta-chip meta-chip-solid">BSIT</span>}
      />

      {/* Academic Degree */}
      <div className="degree-row">
        <div className="degree-icon-box" aria-hidden="true">
          <GraduationCap size={20} strokeWidth={1.8} />
        </div>
        <div className="degree-text">
          <h3 className="degree-name">{profile.degree}</h3>
          <p className="degree-specialization">{profile.specialization}</p>
        </div>
      </div>

      {/* Professional Bio */}
      <p className="panel-body-text">{profile.bio}</p>

      {/* Core Competencies */}
      <div className="competencies-block">
        <span className="micro-label">Core Competencies</span>
        <ul className="competencies-grid">
          {profile.highlights.map((item, i) => (
            <li key={item} className="competency-tile">
              <span className="competency-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="competency-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Graduation Portraits — selecting one updates the header avatar */}
      <div className="portraits-block">
        <div className="portraits-head">
          <span className="micro-label">Graduation Poses</span>
          <span className="micro-hint">Tap to set as photo</span>
        </div>
        <div className="portraits-row" role="radiogroup" aria-label="Choose profile portrait">
          {portraits.map((p) => {
            const active = activePortrait === p.src
            return (
              <button
                key={p.id}
                id={`portrait-${p.id}`}
                type="button"
                role="radio"
                aria-checked={active}
                className={`portrait-thumb ${active ? 'is-active' : ''}`}
                onClick={() => onSelectPortrait(p.src)}
                title={p.label}
              >
                <img src={p.src} alt="" className="portrait-thumb-img" loading="lazy" />
                <span className="portrait-thumb-label">{p.label}</span>
                {active && (
                  <span className="portrait-thumb-check" aria-hidden="true">
                    <Check size={11} strokeWidth={3} />
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
