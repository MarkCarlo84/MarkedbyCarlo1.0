import React from 'react'

interface ToastProps {
  message: string | null
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast-bubble">
        <span className="toast-dot" aria-hidden="true" />
        <span className="toast-text">{message}</span>
      </div>
    </div>
  )
}
