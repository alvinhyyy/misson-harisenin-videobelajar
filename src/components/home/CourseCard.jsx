import RatingStars from '../ui/RatingStars.jsx'

function CourseCard({ image, imageAlt, title, description, instructor, rating, reviews, price }) {
  return (
    <article className="course-card">
      <img className="course-image" src={image} alt={imageAlt} loading="lazy" />
      <h3 className="body-large-bold">{title}</h3>
      <p className="course-description body-medium-regular">{description}</p>

      <div className="instructor">
        <img className="instructor-avatar" src={instructor.avatar} alt="" />
        <div>
          <strong>{instructor.name}</strong>
          <span>{instructor.role}</span>
        </div>
      </div>

      <div className="course-bottom">
        <RatingStars rating={rating} reviews={reviews} />
        <strong className="course-price">{price}</strong>
      </div>
    </article>
  )
}

export default CourseCard
