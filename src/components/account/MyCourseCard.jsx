import { Link } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import StatusBadge from '../ui/StatusBadge.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'
import InstructorInfo from '../course/InstructorInfo.jsx'

function MyCourseCard({ course, completed, total, lessonCount, minutes }) {
  const percent = total ? (completed / total) * 100 : 0
  const isDone = completed === total

  return (
    <article className="list-card">
      <header className="list-card-header">
        <span>{completed} / {total} Modul Terselesaikan</span>
        <StatusBadge tone={isDone ? 'success' : 'warning'}>{isDone ? 'Selesai' : 'Sedang Berjalan'}</StatusBadge>
      </header>

      <div className="list-card-body my-course-body">
        <Link to={`/kelas/${course.id}`}>
          <img className="my-course-image" src={course.image} alt={course.imageAlt} />
        </Link>
        <div className="my-course-info">
          <h3 className="body-large-bold">{course.title}</h3>
          <p className="body-medium-regular">{course.description}</p>
          <InstructorInfo {...course.instructor} />
          <p className="my-course-meta">
            <span><Icon name="book" size={18} /> {lessonCount} Modul</span>
            <span><Icon name="clock" size={18} /> {minutes} Menit</span>
          </p>
        </div>
      </div>

      <footer className="list-card-footer my-course-footer">
        <div className="my-course-progress">
          <span>Progres Kelas: <b>{Math.round(percent)}%</b></span>
          <ProgressBar value={percent} label={`Progres ${course.title}`} />
        </div>
        <div className="button-row">
          {isDone ? (
            <>
              <Button variant="primary-color-3" to={`/kelas/${course.id}/sertifikat`}>Unduh Sertifikat</Button>
              <Button to={`/kelas/${course.id}`}>Lihat Detail Kelas</Button>
            </>
          ) : (
            <Button to={`/belajar/${course.id}`}>Lanjutkan Pembelajaran</Button>
          )}
        </div>
      </footer>
    </article>
  )
}

export default MyCourseCard
