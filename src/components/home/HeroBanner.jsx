import Button from '../ui/Button.jsx'

function HeroBanner({ title, description, ctaLabel, ctaHref }) {
  return (
    <section className="hero-banner" aria-labelledby="hero-title">
      <h1 id="hero-title" className="heading-1">{title}</h1>
      <p className="body-medium-regular">{description}</p>
      <Button href={ctaHref} className="hero-button">{ctaLabel}</Button>
    </section>
  )
}

export default HeroBanner
