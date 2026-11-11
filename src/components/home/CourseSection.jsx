import { useState } from 'react'
import Tabs from '../ui/Tabs.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import ConfirmDialog from '../ui/ConfirmDialog.jsx'
import CourseCard from './CourseCard.jsx'
import CourseFormModal from './CourseFormModal.jsx'

function CourseSection({ title, subtitle, categories, courses, allCategory, onAdd, onUpdate, onDelete }) {
  const [activeCategory, setActiveCategory] = useState(allCategory)
  const [form, setForm] = useState({ open: false, course: null })
  const [courseToDelete, setCourseToDelete] = useState(null)

  const visibleCourses = activeCategory === allCategory
    ? courses
    : courses.filter((course) => course.category === activeCategory)

  const closeForm = () => setForm({ open: false, course: null })

  const handleSubmit = (data) => {
    if (form.course) onUpdate(form.course.id, data)
    else onAdd(data)
    closeForm()
  }

  const confirmDelete = () => {
    onDelete(courseToDelete)
    setCourseToDelete(null)
  }

  return (
    <section id="courses" className="course-section" aria-labelledby="courses-title">
      <div className="course-heading course-heading-row">
        <div>
          <h2 id="courses-title" className="heading-3">{title}</h2>
          <p className="body-medium-regular">{subtitle}</p>
        </div>
        <Button className="add-course-button" onClick={() => setForm({ open: true, course: null })}>
          <Icon name="plus" size={18} /> Tambah Kelas
        </Button>
      </div>

      <Tabs tabs={categories} active={activeCategory} onChange={setActiveCategory} label="Kategori kelas" />

      {visibleCourses.length ? (
        <div className="course-grid">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={(item) => setForm({ open: true, course: item })}
              onDelete={setCourseToDelete}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">Belum ada kelas di kategori ini. Yuk tambahkan kelas baru!</p>
      )}

      {form.open && (
        <CourseFormModal
          key={form.course?.id ?? 'new'}
          open
          course={form.course}
          onClose={closeForm}
          onSubmit={handleSubmit}
        />
      )}

      <ConfirmDialog
        open={Boolean(courseToDelete)}
        title="Hapus Kelas"
        message={`Yakin ingin menghapus "${courseToDelete?.title}"? Tindakan ini tidak bisa dibatalkan.`}
        confirmLabel="Hapus"
        variant="danger"
        onConfirm={confirmDelete}
        onCancel={() => setCourseToDelete(null)}
      />
    </section>
  )
}

export default CourseSection
