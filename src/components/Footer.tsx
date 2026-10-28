import React from 'react'
import type { BusinessCardConfig } from '../types/businessCard'

interface FooterProps {
  config: BusinessCardConfig
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const year = new Date().getFullYear()
  const entityName = config.businessName || config.fullName

  return (
    <footer className="card-footer">
      <div className="nfc-indicator" aria-hidden="true">
        <span className="nfc-pulse-dot" />
        <span className="nfc-label">NFC Digital Card</span>
      </div>
      <p className="copyright-text">
        &copy; {year} {entityName}. All rights reserved.
      </p>
    </footer>
  )
}
