import Button from '../ui/Button.jsx'

function NewsletterBanner({ label, title, description }) {
  return (
    <section className="newsletter-banner" aria-labelledby="newsletter-title">
      <p className="newsletter-label">{label}</p>
      <h2 id="newsletter-title" className="heading-3">{title}</h2>
      <p className="body-medium-regular">{description}</p>

      <form className="newsletter-input-group" onSubmit={(event) => event.preventDefault()}>
        <input type="email" aria-label="Email untuk newsletter" placeholder="Masukkan Emailmu" required />
        <Button type="submit" variant="secondary-color-1">Subscribe</Button>
      </form>
    </section>
  )
}

export default NewsletterBanner
