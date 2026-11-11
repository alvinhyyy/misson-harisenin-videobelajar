import Icon from './Icon.jsx'

function SearchInput({ value, onChange, placeholder = 'Cari Kelas', label = 'Cari' }) {
  return (
    <label className="search-input">
      <span className="visually-hidden">{label}</span>
      <input type="search" value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
      <Icon name="search" />
    </label>
  )
}

export default SearchInput
