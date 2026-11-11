import Accordion from '../ui/Accordion.jsx'
import Icon from '../ui/Icon.jsx'

function FilterPanel({ groups, values, onToggle, onReset, open, onClose }) {
  return (
    <aside className={open ? 'filter-panel filter-panel-open' : 'filter-panel'} aria-label="Filter kelas">
      <div className="filter-header">
        <h2 className="body-large-bold">Filter</h2>
        <button type="button" className="filter-reset" onClick={onReset}>Reset</button>
        <button type="button" className="icon-button filter-close" onClick={onClose} aria-label="Tutup filter">
          <Icon name="close" />
        </button>
      </div>

      {groups.map((group) => (
        <Accordion key={group.id} title={group.title} icon={group.icon} defaultOpen className="filter-group">
          <ul className="filter-options">
            {group.options.map((option) => {
              const checked = group.type === 'radio'
                ? values[group.id] === option.value
                : values[group.id].includes(option.value)
              return (
                <li key={option.value}>
                  <label className={`filter-option filter-${group.type}`}>
                    <input
                      type={group.type}
                      name={group.id}
                      checked={checked}
                      onChange={() => onToggle(group, option.value)}
                      onClick={() => group.type === 'radio' && checked && onToggle(group, null)}
                    />
                    <span className="filter-control" aria-hidden="true" />
                    {option.label}
                  </label>
                </li>
              )
            })}
          </ul>
        </Accordion>
      ))}
    </aside>
  )
}

export default FilterPanel
