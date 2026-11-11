function MethodLogo({ method, large = false }) {
  if (method.id === 'card') {
    return (
      <span className="card-logos" aria-label="Mastercard, Visa, JCB">
        <span className="logo-mastercard" aria-hidden="true"><i /><i /></span>
        <span className="logo-text" style={{ color: '#1A1F71' }}>VISA</span>
        <span className="logo-text logo-jcb">JCB</span>
      </span>
    )
  }

  return (
    <span
      className={large ? 'method-logo method-logo-large' : 'method-logo'}
      style={{ '--brand': method.color }}
      aria-hidden="true"
    >
      {method.short}
    </span>
  )
}

export default MethodLogo
