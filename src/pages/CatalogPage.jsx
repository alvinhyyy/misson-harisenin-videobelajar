import { useState } from 'react'
import MainLayout from '../components/layout/MainLayout.jsx'
import FilterPanel from '../components/course/FilterPanel.jsx'
import CourseCard from '../components/home/CourseCard.jsx'
import Dropdown from '../components/ui/Dropdown.jsx'
import SearchInput from '../components/ui/SearchInput.jsx'
import Pagination from '../components/ui/Pagination.jsx'
import Icon from '../components/ui/Icon.jsx'
import { emptyFilters, filterGroups, sortOptions } from '../data/filters.js'
import { useAppStore } from '../store/useAppStore.js'
import usePageTitle from '../hooks/usePageTitle.js'

const PAGE_SIZE = 6

function matchesFilters(course, filters) {
  const [, priceGroup, durationGroup] = filterGroups

  if (filters.categories.length && !filters.categories.includes(course.category)) return false

  if (filters.prices.length) {
    const tests = priceGroup.options.filter((option) => filters.prices.includes(option.value))
    if (!tests.some((option) => option.test(course.price))) return false
  }

  if (filters.duration) {
    const option = durationGroup.options.find((item) => item.value === filters.duration)
    if (!option.test(course.durationHours ?? 0)) return false
  }

  return true
}

function CatalogPage() {
  usePageTitle('Semua Kelas')
  const { courses } = useAppStore()
  const [filters, setFilters] = useState(emptyFilters)
  const [sort, setSort] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [filterOpen, setFilterOpen] = useState(false)

  const keyword = query.trim().toLowerCase()
  const sortOption = sortOptions.find((option) => option.value === sort)
  const result = courses
    .filter((course) => matchesFilters(course, filters))
    .filter((course) => !keyword || `${course.title} ${course.instructor.name}`.toLowerCase().includes(keyword))
    .sort(sortOption?.compare ?? (() => 0))

  const totalPages = Math.max(1, Math.ceil(result.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = result.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const toggleFilter = (group, value) => {
    setPage(1)
    setFilters((current) => {
      if (group.type === 'radio') return { ...current, [group.id]: value }
      const list = current[group.id]
      return {
        ...current,
        [group.id]: list.includes(value) ? list.filter((item) => item !== value) : [...list, value],
      }
    })
  }

  const handleQuery = (value) => {
    setQuery(value)
    setPage(1)
  }

  return (
    <MainLayout>
      <main className="home-container catalog-page">
        <div className="course-heading">
          <h1 className="heading-3">Koleksi Video Pembelajaran Unggulan</h1>
          <p className="body-medium-regular">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        <div className="catalog-layout">
          <FilterPanel
            groups={filterGroups}
            values={filters}
            onToggle={toggleFilter}
            onReset={() => {
              setFilters(emptyFilters)
              setPage(1)
            }}
            open={filterOpen}
            onClose={() => setFilterOpen(false)}
          />

          <section className="catalog-results" aria-label="Daftar kelas">
            <div className="catalog-toolbar">
              <button type="button" className="dropdown-trigger filter-toggle" onClick={() => setFilterOpen(true)}>
                <Icon name="filter" size={18} /> Filter
              </button>
              <Dropdown label="Urutkan" options={sortOptions} value={sort} onChange={setSort} />
              <SearchInput value={query} onChange={handleQuery} />
            </div>

            {pageItems.length ? (
              <div className="course-grid catalog-grid">
                {pageItems.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <p className="empty-state">Kelas tidak ditemukan. Coba ubah kata kunci atau filter.</p>
            )}

            <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />
          </section>
        </div>
      </main>
    </MainLayout>
  )
}

export default CatalogPage
