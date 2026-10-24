import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeroBanner from '../components/home/HeroBanner.jsx'
import CourseSection from '../components/home/CourseSection.jsx'
import NewsletterBanner from '../components/home/NewsletterBanner.jsx'
import { ALL_CATEGORY, categories, courses } from '../data/courses.js'
import { footerColumns, footerInfo, socials } from '../data/footer.js'
import avatar from '../assets/avatar-navbar.png'
import usePageTitle from '../hooks/usePageTitle.js'

function HomePage() {
  usePageTitle('Beranda')

  return (
    <div className="home-page">
      <Navbar>
        <div className="home-nav-right">
          <a href="#courses" className="home-nav-category">Kategori</a>
          <img className="home-avatar" src={avatar} alt="Profil pengguna" />
        </div>
      </Navbar>

      <main className="home-container">
        <HeroBanner
          title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
          description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          ctaLabel="Temukan Video Course untuk Dipelajari!"
          ctaHref="#courses"
        />

        <CourseSection
          title="Koleksi Video Pembelajaran Unggulan"
          subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
          categories={categories}
          courses={courses}
          allCategory={ALL_CATEGORY}
        />

        <NewsletterBanner
          label="NEWSLETTER"
          title="Mau Belajar Lebih Banyak?"
          description="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik videobelajar."
        />
      </main>

      <Footer {...footerInfo} columns={footerColumns} socials={socials} />
    </div>
  )
}

export default HomePage
