import { useState } from 'react'

function RatingInput({ value, onChange, max = 5 }) {
  const [hover, setHover] = useState(0)
  const shown = hover || value

  return (
    <div className="rating-input" role="radiogroup" aria-label="Pilih rating" onMouseLeave={() => setHover(0)}>
      {Array.from({ length: max }, (_, index) => {
        const star = index + 1
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} bintang`}
            className={star <= shown ? 'rating-input-star rating-input-active' : 'rating-input-star'}
            onMouseEnter={() => setHover(star)}
            onClick={() => onChange(star)}
          >
            ★
          </button>
        )
      })}
    </div>
  )
}

export default RatingInput
