import Tabs from '../ui/Tabs.jsx'
import SearchInput from '../ui/SearchInput.jsx'
import Dropdown from '../ui/Dropdown.jsx'

function ListToolbar({ tabs, activeTab, onTabChange, query, onQueryChange, sortOptions, sort, onSortChange }) {
  return (
    <div className="list-toolbar">
      <Tabs tabs={tabs} active={activeTab} onChange={onTabChange} label="Filter status" className="list-tabs" />
      <div className="list-toolbar-controls">
        <SearchInput value={query} onChange={onQueryChange} />
        {sortOptions && <Dropdown label="Urutkan" options={sortOptions} value={sort} onChange={onSortChange} />}
      </div>
    </div>
  )
}

export default ListToolbar
