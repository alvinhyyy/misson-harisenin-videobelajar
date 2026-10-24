const MAX_STARS = 5

function RatingStars({ rating, reviews }) {
  const filled = Math.floor(rating)

  return (
    <div className="course-rating">
      <span className="rating-stars" aria-hidden="true">
        {'★'.repeat(filled)}
        <span>{'☆'.repeat(MAX_STARS - filled)}</span>
      </span>
      <span className="rating-count">{rating} ({reviews})</span>
    </div>
  )
}

export default RatingStars
