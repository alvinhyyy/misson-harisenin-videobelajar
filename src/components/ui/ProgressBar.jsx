function ProgressBar({ value, tone = 'red', label }) {
  const percent = Math.max(0, Math.min(100, Math.round(value)))

  return (
    <div
      className={`progress-bar progress-${tone}`}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <span style={{ width: `${percent}%` }} />
    </div>
  )
}

export default ProgressBar
