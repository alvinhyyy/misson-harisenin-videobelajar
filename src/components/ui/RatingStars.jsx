const MAX_STARS = 5

function Star({ fill }) {
  return (
    <span className="rating-star" aria-hidden="true">
      ★
      <span className="rating-star-fill" style={{ width: `${fill * 100}%` }}>★</span>
    </span>
  )
}

function RatingStars({ rating, reviews, showValue = true }) {
  return (
    <div className="course-rating" aria-label={`Rating ${rating} dari ${MAX_STARS}`}>
      <span className="rating-stars">
        {Array.from({ length: MAX_STARS }, (_, index) => (
          <Star key={index} fill={Math.max(0, Math.min(1, rating - index))} />
        ))}
      </span>
      {showValue && (
        <span className="rating-count">
          {rating}
          {reviews !== undefined && ` (${reviews})`}
        </span>
      )}
    </div>
  )
}

export default RatingStars
