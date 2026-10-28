import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import type { BusinessCardConfig } from '../types/businessCard'

interface ContactDetailsProps {
  config: BusinessCardConfig
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ config }) => {
  const hasPhone = Boolean(config.phoneNumber?.trim() || config.phoneRaw?.trim())
  const hasEmail = Boolean(config.emailAddress?.trim())
  const hasAddress = Boolean(config.businessAddress?.trim())

  // If no contact fields are configured, do not render this section at all
  if (!hasPhone && !hasEmail && !hasAddress) {
    return null
  }

  const phoneHref = `tel:${(config.phoneRaw || config.phoneNumber || '').replace(/\s+/g, '')}`
  const emailHref = `mailto:${config.emailAddress?.trim()}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    config.businessAddress || ''
  )}`

  return (
    <section className="contact-details-section" aria-label="Contact Information">
      <div className="contact-list">
        {/* Mobile Phone */}
        {hasPhone && (
          <a
            href={phoneHref}
            className="contact-item"
            aria-label={`Call ${config.phoneNumber || config.phoneRaw}`}
          >
            <div className="contact-icon-box">
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
            </div>
            <div className="contact-content">
              <span className="contact-label">Mobile</span>
              <span className="contact-value">
                {config.phoneNumber || config.phoneRaw}
              </span>
            </div>
          </a>
        )}

        {/* Email Address */}
        {hasEmail && (
          <a
            href={emailHref}
            className="contact-item"
            aria-label={`Send email to ${config.emailAddress}`}
          >
            <div className="contact-icon-box">
              <Mail size={18} strokeWidth={2} aria-hidden="true" />
            </div>
            <div className="contact-content">
              <span className="contact-label">Email</span>
              <span className="contact-value">{config.emailAddress}</span>
            </div>
          </a>
        )}

        {/* Business Address */}
        {hasAddress && (
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            aria-label={`View address on map: ${config.businessAddress}`}
          >
            <div className="contact-icon-box">
              <MapPin size={18} strokeWidth={2} aria-hidden="true" />
            </div>
            <div className="contact-content">
              <span className="contact-label">Location</span>
              <span className="contact-value">{config.businessAddress}</span>
            </div>
          </a>
        )}
      </div>
    </section>
  )
}
