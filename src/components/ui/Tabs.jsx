function Tabs({ tabs, active, onChange, label, className = '' }) {
  return (
    <ul className={`course-categories ${className}`.trim()} aria-label={label}>
      {tabs.map((tab) => {
        const value = tab.value ?? tab
        const text = tab.label ?? tab
        return (
          <li key={value} className={value === active ? 'category-active' : undefined}>
            <button type="button" aria-pressed={value === active} onClick={() => onChange(value)}>
              {text}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Tabs
