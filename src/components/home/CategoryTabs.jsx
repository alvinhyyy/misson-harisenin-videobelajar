function CategoryTabs({ categories, activeCategory, onChange }) {
  return (
    <ul className="course-categories" aria-label="Kategori kelas">
      {categories.map((category) => (
        <li key={category} className={category === activeCategory ? 'category-active' : undefined}>
          <button
            type="button"
            aria-pressed={category === activeCategory}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CategoryTabs
