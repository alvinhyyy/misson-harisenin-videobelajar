import { useState } from 'react'
import Button from '../ui/Button.jsx'

function NewsletterBanner({ label, title, description }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubscribed(email)
    setEmail('')
  }

  return (
    <section className="newsletter-banner" aria-labelledby="newsletter-title">
      <p className="newsletter-label">{label}</p>
      <h2 id="newsletter-title" className="heading-3">{title}</h2>
      <p className="body-medium-regular">{description}</p>

      <form className="newsletter-input-group" onSubmit={handleSubmit}>
        <input
          type="email"
          aria-label="Email untuk newsletter"
          placeholder="Masukkan Emailmu"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Button type="submit" variant="secondary-color-1">Subscribe</Button>
      </form>
      {subscribed && (
        <p className="newsletter-success" role="status">Terima kasih! {subscribed} sudah terdaftar.</p>
      )}
    </section>
  )
}

export default NewsletterBanner
