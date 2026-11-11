import RatingStars from '../ui/RatingStars.jsx'

function ReviewCard({ name, subtitle, avatar, text, rating }) {
  return (
    <article className="review-card">
      <div className="instructor">
        <img className="instructor-avatar" src={avatar} alt="" />
        <div>
          <strong>{name}</strong>
          <span>{subtitle}</span>
        </div>
      </div>
      <p className="body-small-regular">{text}</p>
      {rating !== undefined && <RatingStars rating={rating} />}
    </article>
  )
}

export default ReviewCard
