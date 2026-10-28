import { useState, useEffect, useCallback } from 'react'
import { businessCardConfig } from './config/businessCard'
import { BusinessCard } from './components/BusinessCard'
import { Toast } from './components/Toast'

function App() {
  const config = businessCardConfig

  // Theme Management with localStorage persistence & config fallback
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('nfc_card_theme')
    if (saved === 'dark' || saved === 'light') return saved
    if (config.themePreference === 'light') return 'light'
    return 'dark'
  })

  // Ephemeral toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg)
    const timer = setTimeout(() => {
      setToastMessage(null)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  // Dynamic document title & theme synchronization
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('nfc_card_theme', theme)

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff')
    }

    // Dynamic Title
    const titleParts = [config.fullName]
    if (config.professionalTitle) titleParts.push(config.professionalTitle)
    if (config.businessName) titleParts.push(config.businessName)
    document.title = `${titleParts.join(' — ')} | Digital Business Card`
  }, [theme, config])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="page-viewport">
      {/* Subtle ambient lighting for large screens */}
      <div className="ambient-background-glow" aria-hidden="true" />

      {/* Centered Business Card Container */}
      <main className="business-card-container">
        <BusinessCard
          config={config}
          theme={theme}
          onToggleTheme={toggleTheme}
          onToast={showToast}
        />
      </main>

      {/* Ephemeral Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  )
}

export default App
