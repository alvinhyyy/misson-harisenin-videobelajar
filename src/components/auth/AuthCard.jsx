import { useId } from 'react'
import Button from '../ui/Button.jsx'
import Divider from '../ui/Divider.jsx'
import GoogleButton from '../ui/GoogleButton.jsx'

function AuthCard({
  variant = 'login',
  title,
  description,
  submitLabel,
  switchLabel,
  switchTo,
  googleLabel,
  onSubmit,
  children,
}) {
  const titleId = useId()
  const isRegister = variant === 'register'

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <section
      className={isRegister ? 'login-card register-card' : 'login-card'}
      aria-labelledby={titleId}
    >
      <div className={isRegister ? 'login-heading register-heading' : 'login-heading'}>
        <h1 id={titleId} className={isRegister ? 'heading-4' : 'heading-5'}>{title}</h1>
        <p className="body-small-regular login-description">{description}</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        {children}
        <span className="forgot-password">Lupa Password?</span>
        <Button type="submit" className="login-action">{submitLabel}</Button>
      </form>

      <Button to={switchTo} variant="primary-color-2" className="login-action register-link">
        {switchLabel}
      </Button>

      <Divider />
      <GoogleButton label={googleLabel} />
    </section>
  )
}

export default AuthCard
