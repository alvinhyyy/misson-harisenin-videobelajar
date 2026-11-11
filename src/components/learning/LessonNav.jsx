import Icon from '../ui/Icon.jsx'

function LessonNav({ prev, next, onPrev, onNext }) {
  return (
    <nav className="lesson-nav" aria-label="Navigasi materi">
      <button type="button" className="lesson-nav-button" disabled={!prev} onClick={onPrev}>
        <Icon name="chevron-left" size={24} />
        <span className="lesson-nav-full">{prev?.title ?? 'Awal materi'}</span>
        <span className="lesson-nav-short">Sebelumnya</span>
      </button>
      <button type="button" className="lesson-nav-button lesson-nav-next" disabled={!next} onClick={onNext}>
        <span className="lesson-nav-full">{next?.title ?? 'Akhir materi'}</span>
        <span className="lesson-nav-short">Selanjutnya</span>
        <Icon name="chevron-right" size={24} />
      </button>
    </nav>
  )
}

export default LessonNav
