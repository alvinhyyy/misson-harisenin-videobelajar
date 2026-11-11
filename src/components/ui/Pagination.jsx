import Icon from './Icon.jsx'

function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav className="pagination" aria-label="Halaman">
      <button
        type="button"
        className="pagination-arrow"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        aria-label="Halaman sebelumnya"
      >
        <Icon name="chevron-left" />
      </button>
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          className={number === page ? 'pagination-page pagination-active' : 'pagination-page'}
          aria-current={number === page ? 'page' : undefined}
          onClick={() => onChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        className="pagination-arrow"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Halaman berikutnya"
      >
        <Icon name="chevron-right" />
      </button>
    </nav>
  )
}

export default Pagination
