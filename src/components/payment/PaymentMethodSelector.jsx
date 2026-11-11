import { useState } from 'react'
import Icon from '../ui/Icon.jsx'
import MethodLogo from './MethodLogo.jsx'
import { paymentGroups } from '../../data/payments.js'

function PaymentMethodSelector({ value, onChange, defaultOpen = true }) {
  const [openGroups, setOpenGroups] = useState(() =>
    defaultOpen ? paymentGroups.map((group) => group.id) : [],
  )

  const toggleGroup = (id) => {
    setOpenGroups((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  return (
    <div className="method-selector" role="radiogroup" aria-label="Metode pembayaran">
      {paymentGroups.map((group) => {
        const isOpen = openGroups.includes(group.id)
        return (
          <div key={group.id} className="method-group">
            <button
              type="button"
              className="method-group-trigger"
              aria-expanded={isOpen}
              onClick={() => toggleGroup(group.id)}
            >
              {group.title}
              <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} />
            </button>

            {isOpen &&
              group.methods.map((method) => {
                const selected = method.id === value
                return (
                  <button
                    key={method.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    className={selected ? 'method-option method-option-selected' : 'method-option'}
                    onClick={() => onChange(method.id)}
                  >
                    <MethodLogo method={method} />
                    {method.id !== 'card' && <span>{method.name}</span>}
                    {selected && <Icon name="check-circle" className="method-check" />}
                  </button>
                )
              })}
          </div>
        )
      })}
    </div>
  )
}

export default PaymentMethodSelector
