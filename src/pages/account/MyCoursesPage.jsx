import { useState } from 'react'
import AccountLayout from '../../components/layout/AccountLayout.jsx'
import ListToolbar from '../../components/account/ListToolbar.jsx'
import MyCourseCard from '../../components/account/MyCourseCard.jsx'
import Pagination from '../../components/ui/Pagination.jsx'
import Button from '../../components/ui/Button.jsx'
import { lessons } from '../../data/curriculum.js'
import { useAppStore } from '../../store/useAppStore.js'
import usePageTitle from '../../hooks/usePageTitle.js'

const PAGE_SIZE = 3
const TABS = [
  { value: 'all', label: 'Semua Kelas' },
  { value: 'progress', label: 'Sedang Berjalan' },
  { value: 'done', label: 'Selesai' },
]

const totalMinutes = lessons.reduce((sum, lesson) => sum + (lesson.type === 'video' || lesson.type === 'summary' ? lesson.amount : 0), 0)

function MyCoursesPage() {
  usePageTitle('Kelas Saya')
  const { enrollments, getCourse } = useAppStore()
  const [tab, setTab] = useState('all')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const keyword = query.trim().toLowerCase()
  const items = enrollments
    .map((enrollment) => ({
      course: getCourse(enrollment.courseId),
      completed: lessons.filter((lesson) => enrollment.completedLessons.includes(lesson.id)).length,
    }))
    .filter((item) => item.course)
    .filter((item) => {
      const isDone = item.completed === lessons.length
      if (tab === 'progress' && isDone) return false
      if (tab === 'done' && !isDone) return false
      return !keyword || item.course.title.toLowerCase().includes(keyword)
    })

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = items.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <AccountLayout title="Daftar Kelas" subtitle="Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!">
      <div className="card list-panel">
        <ListToolbar
          tabs={TABS}
          activeTab={tab}
          onTabChange={(value) => {
            setTab(value)
            setPage(1)
          }}
          query={query}
          onQueryChange={(value) => {
            setQuery(value)
            setPage(1)
          }}
        />

        {pageItems.length ? (
          <div className="list-stack">
            {pageItems.map(({ course, completed }) => (
              <MyCourseCard
                key={course.id}
                course={course}
                completed={completed}
                total={lessons.length}
                lessonCount={lessons.length}
                minutes={totalMinutes}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Belum ada kelas di sini.</p>
            <Button to="/kelas">Cari Kelas</Button>
          </div>
        )}

        <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />
      </div>
    </AccountLayout>
  )
}

export default MyCoursesPage
