import card1 from '../assets/card-1.jpg'
import card2 from '../assets/card-2.jpg'
import card3 from '../assets/card-3.jpg'
import card4 from '../assets/card-4.jpg'
import card5 from '../assets/card-5.jpg'
import card6 from '../assets/card-6.jpg'
import card7 from '../assets/card-7.jpg'
import card8 from '../assets/card-8.jpg'
import card9 from '../assets/card-9.jpg'
import avatar1 from '../assets/ava-card-1.png'
import avatar2 from '../assets/ava-card-2.png'
import avatar3 from '../assets/ava-card-3.png'
import avatar4 from '../assets/ava-card-4.png'
import avatar5 from '../assets/ava-card-5.png'
import avatar6 from '../assets/ava-card-6.png'
import avatar7 from '../assets/ava-card-7.png'
import avatar8 from '../assets/ava-card-8.png'
import avatar9 from '../assets/ava-card-9.png'

export const ALL_CATEGORY = 'Semua Kelas'

export const categories = [ALL_CATEGORY, 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis']

const courseItems = [
  { image: card1, imageAlt: 'Belajar menggunakan laptop di luar ruangan', avatar: avatar1, category: 'Bisnis' },
  { image: card2, imageAlt: 'Menulis catatan di buku', avatar: avatar2, category: 'Pemasaran' },
  { image: card3, imageAlt: 'Menulis rumus pada lembar catatan', avatar: avatar3, category: 'Bisnis' },
  { image: card4, imageAlt: 'Bekerja dengan laptop di meja', avatar: avatar4, category: 'Desain' },
  { image: card5, imageAlt: 'Diskusi pekerjaan di dekat laptop', avatar: avatar5, category: 'Pengembangan Diri' },
  { image: card6, imageAlt: 'Secangkir kopi dan buku catatan', avatar: avatar6, category: 'Pemasaran' },
  { image: card7, imageAlt: 'Peta dan kompas untuk belajar perjalanan', avatar: avatar7, category: 'Pengembangan Diri' },
  { image: card8, imageAlt: 'Mencatat ide bersama rekan kerja', avatar: avatar8, category: 'Desain' },
  { image: card9, imageAlt: 'Menulis di buku catatan dekat laptop', avatar: avatar9, category: 'Bisnis' },
]

export const courses = courseItems.map((item, index) => ({
  id: index + 1,
  title: 'Big 4 Auditor Financial Analyst',
  description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.',
  instructor: {
    name: 'Jenna Ortega',
    role: 'Senior Accountant di Gojek',
    avatar: item.avatar,
  },
  rating: 3.5,
  reviews: 86,
  price: 'Rp 300K',
  ...item,
}))
