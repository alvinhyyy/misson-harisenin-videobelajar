import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { LESSON_TYPES } from '../../data/curriculum.js'

function ModuleSidebar({ courseId, modules, activeLessonId, completedLessons, onReview }) {
  const activeModule = modules.find((module) => module.lessons.some((lesson) => lesson.id === activeLessonId))
  const [openModules, setOpenModules] = useState(() => [activeModule?.id ?? modules[0].id])

  const toggle = (id) =>
    setOpenModules((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))

  return (
    <aside className="module-sidebar" aria-label="Daftar modul">
      <h2 className="body-large-bold module-sidebar-title">Daftar Modul</h2>

      <div className="module-list">
        {modules.map((module) => {
          const isOpen = openModules.includes(module.id)
          return (
            <section key={module.id} className="module-group">
              <button type="button" className="module-trigger" aria-expanded={isOpen} onClick={() => toggle(module.id)}>
                {module.title}
                <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} />
              </button>

              {isOpen && (
                <ul className="lesson-list">
                  {module.lessons.map((lesson) => {
                    const type = LESSON_TYPES[lesson.type]
                    const done = completedLessons.includes(lesson.id)
                    const active = lesson.id === activeLessonId
                    const className = ['lesson-item', active && 'lesson-active', done && 'lesson-done'].filter(Boolean).join(' ')
                    return (
                      <li key={lesson.id}>
                        <Link
                          to={`/belajar/${courseId}/${lesson.id}`}
                          className={className}
                          aria-current={active ? 'page' : undefined}
                        >
                          <Icon name={done ? 'check-circle' : type.icon} className="lesson-icon" />
                          <span>
                            <strong>{lesson.title}</strong>
                            <small>{lesson.amount} {type.label}</small>
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </section>
          )
        })}
      </div>

      <button type="button" className="review-button" onClick={onReview}>
        <Icon name="star" /> Beri Review &amp; Rating
      </button>
    </aside>
  )
}

export default ModuleSidebar
