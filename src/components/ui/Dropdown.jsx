import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

function Dropdown({ label, options, value, onChange, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = options.find((option) => option.value === value)

  useEffect(() => {
    if (!open) return undefined

    const close = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false)
    }
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)

    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <div className={`dropdown ${className}`.trim()} ref={ref}>
      <button type="button" className="dropdown-trigger" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {selected?.label ?? label}
        <Icon name="chevron-down" size={18} />
      </button>
      {open && (
        <ul className="dropdown-menu" role="listbox" aria-label={label}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={option.value === value ? 'dropdown-item dropdown-item-active' : 'dropdown-item'}
                onClick={() => {
                  onChange(option.value)
                  setOpen(false)
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
