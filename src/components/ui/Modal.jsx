import { useEffect, useId } from 'react'
import Icon from './Icon.jsx'

function Modal({ open, title, onClose, size = 'medium', className = '', children }) {
  const titleId = useId()

  useEffect(() => {
    if (!open) return undefined

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onMouseDown={(event) => event.target === event.currentTarget && onClose?.()}>
      <div
        className={`modal modal-${size} ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
      >
        {title && (
          <div className="modal-header">
            <h2 id={titleId} className="heading-6">{title}</h2>
            <button type="button" className="icon-button" onClick={onClose} aria-label="Tutup">
              <Icon name="close" />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export default Modal
