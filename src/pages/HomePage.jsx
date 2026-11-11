import MainLayout from '../components/layout/MainLayout.jsx'
import HeroBanner from '../components/home/HeroBanner.jsx'
import CourseSection from '../components/home/CourseSection.jsx'
import NewsletterBanner from '../components/home/NewsletterBanner.jsx'
import Toast from '../components/ui/Toast.jsx'
import { ALL_CATEGORY, categories } from '../data/courses.js'
import { useAppStore } from '../store/useAppStore.js'
import usePageTitle from '../hooks/usePageTitle.js'
import useToast from '../hooks/useToast.js'

function HomePage() {
  usePageTitle('Beranda')
  const { courses, addCourse, updateCourse, deleteCourse } = useAppStore()
  const toast = useToast()

  const handleAdd = (data) => {
    addCourse(data)
    toast.show('Kelas baru berhasil ditambahkan')
  }

  const handleUpdate = (id, data) => {
    updateCourse(id, data)
    toast.show('Perubahan kelas berhasil disimpan')
  }

  const handleDelete = (course) => {
    deleteCourse(course.id)
    toast.show(`"${course.title}" telah dihapus`)
  }

  return (
    <MainLayout>
      <main className="home-container">
        <HeroBanner
          title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
          description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          ctaLabel="Temukan Video Course untuk Dipelajari!"
          ctaTo="/kelas"
        />

        <CourseSection
          title="Koleksi Video Pembelajaran Unggulan"
          subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
          categories={categories}
          courses={courses}
          allCategory={ALL_CATEGORY}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

        <NewsletterBanner
          label="NEWSLETTER"
          title="Mau Belajar Lebih Banyak?"
          description="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik videobelajar."
        />
      </main>
      <Toast message={toast.message} onClose={toast.clear} />
    </MainLayout>
  )
}

export default HomePage
