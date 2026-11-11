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

export const courseCategories = ['Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis']

export const categories = [ALL_CATEGORY, ...courseCategories]

export const thumbnailOptions = [
  { image: card1, imageAlt: 'Belajar menggunakan laptop di luar ruangan' },
  { image: card2, imageAlt: 'Menulis catatan di buku' },
  { image: card3, imageAlt: 'Menulis rumus pada lembar catatan' },
  { image: card4, imageAlt: 'Bekerja dengan laptop di meja' },
  { image: card5, imageAlt: 'Diskusi pekerjaan di dekat laptop' },
  { image: card6, imageAlt: 'Secangkir kopi dan buku catatan' },
  { image: card7, imageAlt: 'Peta dan kompas untuk belajar perjalanan' },
  { image: card8, imageAlt: 'Mencatat ide bersama rekan kerja' },
  { image: card9, imageAlt: 'Menulis di buku catatan dekat laptop' },
]

export const avatarOptions = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9]

const seeds = [
  {
    title: 'Big 4 Auditor Financial Analyst',
    category: 'Bisnis',
    instructor: { name: 'Jenna Ortega', role: 'Senior Accountant', company: 'Gojek' },
    price: 300000,
    originalPrice: null,
    rating: 3.5,
    reviews: 86,
    durationHours: 6,
  },
  {
    title: 'Digital Marketing untuk Pemula',
    category: 'Pemasaran',
    instructor: { name: 'Gregorius Edrik', role: 'Marketing Lead', company: 'Tokopedia' },
    price: 100000,
    originalPrice: 300000,
    rating: 4.5,
    reviews: 120,
    durationHours: 3,
  },
  {
    title: 'Analisis Data Keuangan dengan Excel',
    category: 'Bisnis',
    instructor: { name: 'Nadia Putri', role: 'Financial Analyst', company: 'Bank Mandiri' },
    price: 250000,
    originalPrice: 500000,
    rating: 4,
    reviews: 64,
    durationHours: 8,
  },
  {
    title: 'Gapai Karier Impianmu sebagai UI/UX Designer',
    category: 'Desain',
    instructor: { name: 'Jenna Ortega', role: 'Senior Product Designer', company: 'Gojek' },
    price: 250000,
    originalPrice: 500000,
    rating: 4.5,
    reviews: 210,
    durationHours: 12,
  },
  {
    title: 'Public Speaking yang Percaya Diri',
    category: 'Pengembangan Diri',
    instructor: { name: 'Raka Pratama', role: 'Professional Trainer', company: 'Rise' },
    price: 150000,
    originalPrice: null,
    rating: 3.5,
    reviews: 45,
    durationHours: 2,
  },
  {
    title: 'Content Marketing & Copywriting',
    category: 'Pemasaran',
    instructor: { name: 'Sinta Maharani', role: 'Content Strategist', company: 'Traveloka' },
    price: 300000,
    originalPrice: null,
    rating: 4,
    reviews: 73,
    durationHours: 5,
  },
  {
    title: 'Manajemen Waktu dan Produktivitas',
    category: 'Pengembangan Diri',
    instructor: { name: 'Dimas Arya', role: 'Career Coach', company: 'Glints' },
    price: 50000,
    originalPrice: 150000,
    rating: 5,
    reviews: 32,
    durationHours: 3,
  },
  {
    title: 'Dasar Desain Grafis dengan Figma',
    category: 'Desain',
    instructor: { name: 'Laras Wening', role: 'Visual Designer', company: 'Shopee' },
    price: 350000,
    originalPrice: null,
    rating: 4.5,
    reviews: 98,
    durationHours: 9,
  },
  {
    title: 'Membangun Bisnis Online dari Nol',
    category: 'Bisnis',
    instructor: { name: 'Bima Santoso', role: 'Founder', company: 'Kopi Kenangan' },
    price: 600000,
    originalPrice: 900000,
    rating: 4,
    reviews: 57,
    durationHours: 10,
  },
]

export const DEFAULT_DESCRIPTION =
  'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.'

export const initialCourses = seeds.map((seed, index) => ({
  id: String(index + 1),
  description: DEFAULT_DESCRIPTION,
  ...thumbnailOptions[index],
  ...seed,
  instructor: { ...seed.instructor, avatar: avatarOptions[index] },
}))
