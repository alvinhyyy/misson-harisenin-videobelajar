import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import Button from '../ui/Button.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'

function LearningHeader({ course, completed, total, avatar }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const percent = total ? (completed / total) * 100 : 0
  const isDone = completed === total

  useEffect(() => {
    if (!open) return undefined
    const close = (event) => !ref.current?.contains(event.target) && setOpen(false)
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  return (
    <header className="learning-header">
      <Link to="/profil/kelas" className="learning-back" aria-label="Kembali ke Kelas Saya">
        <Icon name="arrow-left" size={22} />
        <span className="learning-course-title">{course.title}</span>
      </Link>

      <div className="learning-progress" ref={ref}>
        <button
          type="button"
          className={isDone ? 'learning-progress-trigger learning-progress-done' : 'learning-progress-trigger'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {isDone ? (
            <>
              <Icon name="trophy" size={20} />
              <span>Ambil Sertifikat</span>
            </>
          ) : (
            <>
              <ProgressBar value={percent} tone="yellow" label="Progres kelas" />
              <span>{completed}/{total}</span>
            </>
          )}
          <Icon name="chevron-down" size={18} />
        </button>

        {open && (
          <div className="progress-popover" role="dialog" aria-label="Progres kelas">
            <h2 className="body-large-bold">{isDone ? 'Modul sudah selesai' : `${Math.round(percent)}% Modul Telah Selesai`}</h2>
            <p className="body-small-regular">
              {isDone
                ? `${completed} dari ${total} modul telah selesai, silahkan download sertifikat`
                : 'Selesaikan Semua Modul Untuk Mendapatkan Sertifikat'}
            </p>
            {isDone ? (
              <Button to={`/kelas/${course.id}/sertifikat`} className="block-button">Ambil Sertifikat</Button>
            ) : (
              <Button variant="tertiary-color-1" className="block-button" disabled>Ambil Sertifikat</Button>
            )}
          </div>
        )}
      </div>

      <img className="home-avatar learning-avatar" src={avatar} alt="" />
    </header>
  )
}

export default LearningHeader
