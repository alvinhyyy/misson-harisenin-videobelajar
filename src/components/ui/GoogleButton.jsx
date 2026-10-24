function GoogleButton({ label }) {
  return (
    <button type="button" className="button login-google">
      <span className="google-mark" aria-hidden="true">G</span>
      {label}
    </button>
  )
}

export default GoogleButton
