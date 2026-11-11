import { useState } from 'react'
import Icon from './Icon.jsx'

function Accordion({ title, icon, defaultOpen = false, open, onToggle, className = '', children }) {
  const [localOpen, setLocalOpen] = useState(defaultOpen)
  const isOpen = open ?? localOpen
  const toggle = onToggle ?? (() => setLocalOpen((value) => !value))

  return (
    <div className={`accordion ${isOpen ? 'accordion-open' : ''} ${className}`.trim()}>
      <button type="button" className="accordion-trigger" aria-expanded={isOpen} onClick={toggle}>
        {icon && <Icon name={icon} />}
        <span className="accordion-title">{title}</span>
        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} />
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  )
}

export default Accordion
