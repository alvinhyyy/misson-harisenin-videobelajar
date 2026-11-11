import Icon from '../ui/Icon.jsx'
import { courseIncludes, courseLanguage } from '../../data/curriculum.js'
import { discountPercent, formatShortPrice } from '../../utils/format.js'

function CourseSummaryCard({ course, showImage = false, children, className = '' }) {
  const discount = discountPercent(course.price, course.originalPrice)

  return (
    <aside className={`card course-summary ${className}`.trim()}>
      {showImage && <img className="course-summary-image" src={course.image} alt={course.imageAlt} />}
      <h2 className="body-large-bold course-summary-title">{course.title}</h2>

      <div className="course-summary-price">
        <strong>{formatShortPrice(course.price)}</strong>
        {discount > 0 && <s>{formatShortPrice(course.originalPrice)}</s>}
        {discount > 0 && <span className="discount-badge">Diskon {discount}%</span>}
      </div>

      {children}

      <h3 className="body-small-bold course-summary-subtitle">Kelas Ini Sudah Termasuk</h3>
      <ul className="course-includes">
        {courseIncludes.map((item) => (
          <li key={item.label}>
            <Icon name={item.icon} size={18} />
            {item.label}
          </li>
        ))}
      </ul>

      <h3 className="body-small-bold course-summary-subtitle">Bahasa Pengantar</h3>
      <p className="course-language">
        <Icon name="globe" size={18} />
        {courseLanguage}
      </p>
    </aside>
  )
}

export default CourseSummaryCard
