import { useState } from 'react'
import AccountLayout from '../../components/layout/AccountLayout.jsx'
import ListToolbar from '../../components/account/ListToolbar.jsx'
import OrderCard from '../../components/account/OrderCard.jsx'
import Pagination from '../../components/ui/Pagination.jsx'
import ConfirmDialog from '../../components/ui/ConfirmDialog.jsx'
import Toast from '../../components/ui/Toast.jsx'
import { useAppStore } from '../../store/useAppStore.js'
import usePageTitle from '../../hooks/usePageTitle.js'
import useToast from '../../hooks/useToast.js'

const PAGE_SIZE = 4
const TABS = [
  { value: 'all', label: 'Semua Pesanan' },
  { value: 'pending', label: 'Menunggu' },
  { value: 'paid', label: 'Berhasil' },
  { value: 'failed', label: 'Gagal' },
]
const SORT_OPTIONS = [
  { value: 'newest', label: 'Terbaru' },
  { value: 'oldest', label: 'Terlama' },
  { value: 'price-desc', label: 'Harga Tertinggi' },
  { value: 'price-asc', label: 'Harga Terendah' },
]
const sorters = {
  newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  'price-desc': (a, b) => b.total - a.total,
  'price-asc': (a, b) => a.total - b.total,
}

function OrdersPage() {
  usePageTitle('Pesanan Saya')
  const { orders, deleteOrder } = useAppStore()
  const [tab, setTab] = useState('all')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('newest')
  const [page, setPage] = useState(1)
  const [orderToDelete, setOrderToDelete] = useState(null)
  const toast = useToast()

  const keyword = query.trim().toLowerCase()
  const items = orders
    .filter((order) => tab === 'all' || order.status === tab)
    .filter((order) => !keyword || `${order.courseTitle} ${order.invoice}`.toLowerCase().includes(keyword))
    .sort(sorters[sort])

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = items.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const resetPage = (setter) => (value) => {
    setter(value)
    setPage(1)
  }

  const confirmDelete = () => {
    deleteOrder(orderToDelete.id)
    toast.show(`Pesanan ${orderToDelete.invoice} telah dihapus`)
    setOrderToDelete(null)
  }

  return (
    <AccountLayout title="Daftar Pesanan" subtitle="Informasi terperinci mengenai pembelian">
      <div className="card list-panel">
        <ListToolbar
          tabs={TABS}
          activeTab={tab}
          onTabChange={resetPage(setTab)}
          query={query}
          onQueryChange={resetPage(setQuery)}
          sortOptions={SORT_OPTIONS}
          sort={sort}
          onSortChange={setSort}
        />

        {pageItems.length ? (
          <div className="list-stack">
            {pageItems.map((order) => (
              <OrderCard key={order.id} order={order} onDelete={setOrderToDelete} />
            ))}
          </div>
        ) : (
          <p className="empty-state">Tidak ada pesanan.</p>
        )}

        <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />
      </div>

      <ConfirmDialog
        open={Boolean(orderToDelete)}
        title={orderToDelete?.status === 'pending' ? 'Batalkan Pesanan' : 'Hapus Pesanan'}
        message={`Pesanan ${orderToDelete?.invoice} akan dihapus dari daftar. Lanjutkan?`}
        confirmLabel="Ya, Hapus"
        variant="danger"
        onConfirm={confirmDelete}
        onCancel={() => setOrderToDelete(null)}
      />
      <Toast message={toast.message} onClose={toast.clear} />
    </AccountLayout>
  )
}

export default OrdersPage
