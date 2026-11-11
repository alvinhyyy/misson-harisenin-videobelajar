import { Navigate, useParams } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout.jsx'
import Breadcrumb from '../components/ui/Breadcrumb.jsx'
import RatingStars from '../components/ui/RatingStars.jsx'
import Accordion from '../components/ui/Accordion.jsx'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import CourseSummaryCard from '../components/course/CourseSummaryCard.jsx'
import ReviewCard from '../components/course/ReviewCard.jsx'
import CourseCard from '../components/home/CourseCard.jsx'
import { longDescription, syllabus, tutorBio } from '../data/curriculum.js'
import { useAppStore } from '../store/useAppStore.js'
import usePageTitle from '../hooks/usePageTitle.js'

function CourseDetailPage() {
  const { courseId } = useParams()
  const { courses, getCourse, getEnrollment, getCourseReviews } = useAppStore()
  const course = getCourse(courseId)
  usePageTitle(course?.title ?? 'Kelas')

  if (!course) return <Navigate to="/kelas" replace />

  const enrolled = Boolean(getEnrollment(courseId))
  const reviews = getCourseReviews(courseId)
  const related = courses
    .filter((item) => item.id !== course.id)
    .sort((a, b) => Number(b.category === course.category) - Number(a.category === course.category))
    .slice(0, 3)

  return (
    <MainLayout>
      <main className="home-container detail-page">
        <Breadcrumb
          items={[
            { label: 'Beranda', to: '/' },
            { label: course.category, to: '/kelas' },
            { label: course.title },
          ]}
        />

        <section
          className="detail-hero"
          style={{ backgroundImage: `linear-gradient(var(--overlay-dark), var(--overlay-dark)), url(${course.image})` }}
        >
          <h1 className="heading-3">{course.title}</h1>
          <p className="body-medium-regular">Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.</p>
          <RatingStars rating={course.rating} reviews={course.reviews} />
        </section>

        <div className="detail-layout">
          <div className="detail-main">
            <section className="card detail-section">
              <h2 className="heading-6">Deskripsi</h2>
              <p className="body-small-regular detail-text">{course.description} {longDescription}</p>
            </section>

            <section className="card detail-section">
              <h2 className="heading-6">Belajar bersama Tutor Profesional</h2>
              <div className="review-grid">
                <ReviewCard
                  name={course.instructor.name}
                  subtitle={`${course.instructor.role}${course.instructor.company ? ` di ${course.instructor.company}` : ''}`}
                  avatar={course.instructor.avatar}
                  text={tutorBio}
                />
              </div>
            </section>

            <section className="card detail-section">
              <h2 className="heading-6">Kamu akan Mempelajari</h2>
              {syllabus.map((chapter, index) => (
                <Accordion key={chapter.id} title={chapter.title} defaultOpen={index === 0} className="syllabus">
                  <ul className="syllabus-list">
                    {chapter.items.map((item) => (
                      <li key={item}>
                        <span>{item}</span>
                        <span className="syllabus-meta">
                          <Icon name="play-circle" size={18} /> Video
                          <Icon name="clock" size={18} /> 12 Menit
                        </span>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              ))}
            </section>

            <section className="card detail-section">
              <h2 className="heading-6">Rating dan Review</h2>
              <div className="review-grid">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} {...review} subtitle={review.batch} />
                ))}
              </div>
            </section>
          </div>

          <CourseSummaryCard course={course} className="detail-summary">
            <p className="special-offer">Penawaran spesial tersisa 2 hari lagi!</p>
            {enrolled ? (
              <Button to={`/belajar/${course.id}`} className="block-button">Lanjutkan Belajar</Button>
            ) : (
              <Button to={`/checkout/${course.id}`} className="block-button">Beli Sekarang</Button>
            )}
          </CourseSummaryCard>
        </div>

        <section className="related-section">
          <h2 className="heading-4">Video Pembelajaran Terkait Lainnya</h2>
          <p className="body-medium-regular related-subtitle">Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
          <div className="course-grid">
            {related.map((item) => (
              <CourseCard key={item.id} course={item} />
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default CourseDetailPage
