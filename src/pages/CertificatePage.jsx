import { Navigate, useParams } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout.jsx'
import Breadcrumb from '../components/ui/Breadcrumb.jsx'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import RatingStars from '../components/ui/RatingStars.jsx'
import InstructorInfo from '../components/course/InstructorInfo.jsx'
import certificateImage from '../assets/certificate.png'
import { lessons } from '../data/curriculum.js'
import { useAppStore } from '../store/useAppStore.js'
import usePageTitle from '../hooks/usePageTitle.js'

function CertificatePage() {
  usePageTitle('Sertifikat')
  const { courseId } = useParams()
  const { getCourse, getEnrollment } = useAppStore()
  const course = getCourse(courseId)
  const enrollment = getEnrollment(courseId)

  if (!course) return <Navigate to="/profil/kelas" replace />

  const completed = lessons.filter((lesson) => enrollment?.completedLessons.includes(lesson.id)).length
  const isDone = completed === lessons.length

  return (
    <MainLayout>
      <main className="home-container certificate-page">
        <Breadcrumb
          items={[
            { label: 'Beranda', to: '/' },
            { label: course.category, to: '/kelas' },
            { label: course.title.length > 14 ? `${course.title.slice(0, 12)}...` : course.title, to: `/kelas/${course.id}` },
            { label: 'Sertifikat' },
          ]}
        />

        <section className="card certificate-card">
          <div className={isDone ? 'certificate-preview' : 'certificate-preview certificate-locked'}>
            <img src={certificateImage} alt={`Sertifikat kelas ${course.title}`} />
            {!isDone && (
              <p className="certificate-lock-message">
                Selesaikan {lessons.length - completed} modul lagi untuk membuka sertifikat
              </p>
            )}
          </div>

          <div className="certificate-info">
            <div>
              <h1 className="heading-6">{course.title}</h1>
              <p className="body-medium-regular lesson-description">{course.description}</p>
              <InstructorInfo {...course.instructor} />
              <RatingStars rating={course.rating} reviews={course.reviews} />
            </div>
            {isDone ? (
              <Button variant="primary-color-3" href={certificateImage} download="sertifikat-videobelajar.png">
                <Icon name="download" /> Download Sertifikat
              </Button>
            ) : (
              <Button to={`/belajar/${course.id}`}>Lanjutkan Belajar</Button>
            )}
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default CertificatePage
