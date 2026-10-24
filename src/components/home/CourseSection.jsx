import { useState } from 'react'
import CategoryTabs from './CategoryTabs.jsx'
import CourseCard from './CourseCard.jsx'

function CourseSection({ title, subtitle, categories, courses, allCategory }) {
  const [activeCategory, setActiveCategory] = useState(allCategory)

  const visibleCourses = activeCategory === allCategory
    ? courses
    : courses.filter((course) => course.category === activeCategory)

  return (
    <section id="courses" className="course-section" aria-labelledby="courses-title">
      <div className="course-heading">
        <h2 id="courses-title" className="heading-3">{title}</h2>
        <p className="body-medium-regular">{subtitle}</p>
      </div>

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="course-grid">
        {visibleCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  )
}

export default CourseSection
