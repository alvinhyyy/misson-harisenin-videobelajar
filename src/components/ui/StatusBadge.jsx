function StatusBadge({ tone = 'success', children }) {
  return <span className={`status-badge status-${tone}`}>{children}</span>
}

export default StatusBadge
