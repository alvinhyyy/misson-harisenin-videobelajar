import { Link } from 'react-router-dom'
import RatingStars from '../ui/RatingStars.jsx'
import PriceTag from '../ui/PriceTag.jsx'
import Icon from '../ui/Icon.jsx'
import InstructorInfo from '../course/InstructorInfo.jsx'

function CourseCard({ course, onEdit, onDelete }) {
  const { id, image, imageAlt, title, description, instructor, rating, reviews, price, originalPrice } = course
  const hasActions = onEdit || onDelete

  return (
    <article className="course-card">
      <Link to={`/kelas/${id}`} className="course-card-link">
        <img className="course-image" src={image} alt={imageAlt} loading="lazy" />
        <h3 className="body-large-bold">{title}</h3>
      </Link>
      <p className="course-description body-medium-regular">{description}</p>

      <InstructorInfo {...instructor} />

      <div className="course-bottom">
        <RatingStars rating={rating} reviews={reviews} />
        <PriceTag price={price} originalPrice={originalPrice} />
      </div>

      {hasActions && (
        <div className="course-actions">
          {onEdit && (
            <button type="button" className="course-action course-action-edit" onClick={() => onEdit(course)}>
              <Icon name="edit" size={16} /> Edit
            </button>
          )}
          {onDelete && (
            <button type="button" className="course-action course-action-delete" onClick={() => onDelete(course)}>
              <Icon name="trash" size={16} /> Hapus
            </button>
          )}
        </div>
      )}
    </article>
  )
}

export default CourseCard
