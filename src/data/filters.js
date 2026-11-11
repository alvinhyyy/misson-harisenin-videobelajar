import { courseCategories } from './courses.js'

export const filterGroups = [
  {
    id: 'categories',
    title: 'Bidang Studi',
    icon: 'book',
    type: 'checkbox',
    options: courseCategories.map((category) => ({ value: category, label: category })),
  },
  {
    id: 'prices',
    title: 'Harga',
    icon: 'basket',
    type: 'checkbox',
    options: [
      { value: 'under-200', label: 'Di bawah Rp 200K', test: (price) => price < 200000 },
      { value: '200-500', label: 'Rp 200K - 500K', test: (price) => price >= 200000 && price <= 500000 },
      { value: 'over-500', label: 'Di atas Rp 500K', test: (price) => price > 500000 },
    ],
  },
  {
    id: 'duration',
    title: 'Durasi',
    icon: 'clock',
    type: 'radio',
    options: [
      { value: 'short', label: 'Kurang dari 4 Jam', test: (hours) => hours < 4 },
      { value: 'medium', label: '4 - 8 Jam', test: (hours) => hours >= 4 && hours <= 8 },
      { value: 'long', label: 'Lebih dari 8 Jam', test: (hours) => hours > 8 },
    ],
  },
]

export const emptyFilters = { categories: [], prices: [], duration: null }

export const sortOptions = [
  { value: 'price-asc', label: 'Harga Rendah', compare: (a, b) => a.price - b.price },
  { value: 'price-desc', label: 'Harga Tinggi', compare: (a, b) => b.price - a.price },
  { value: 'title-asc', label: 'A to Z', compare: (a, b) => a.title.localeCompare(b.title) },
  { value: 'title-desc', label: 'Z to A', compare: (a, b) => b.title.localeCompare(a.title) },
  { value: 'rating-desc', label: 'Rating Tertinggi', compare: (a, b) => b.rating - a.rating },
  { value: 'rating-asc', label: 'Rating Terendah', compare: (a, b) => a.rating - b.rating },
]
