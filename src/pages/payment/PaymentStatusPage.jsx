import { Navigate, useParams } from 'react-router-dom'
import PaymentLayout from '../../components/layout/PaymentLayout.jsx'
import Button from '../../components/ui/Button.jsx'
import successImage from '../../assets/payment-success.png'
import pendingImage from '../../assets/payment-pending.png'
import { useAppStore } from '../../store/useAppStore.js'
import usePageTitle from '../../hooks/usePageTitle.js'

const content = {
  paid: {
    image: successImage,
    title: 'Pembayaran Berhasil!',
    message: 'Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.',
  },
  pending: {
    image: pendingImage,
    title: 'Pembayaran Tertunda!',
    message: 'Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.',
  },
  failed: {
    image: pendingImage,
    title: 'Pembayaran Gagal!',
    message: 'Transaksi tidak dapat diproses. Silakan lakukan pemesanan ulang atau hubungi kami jika ada kendala.',
  },
}

function PaymentStatusPage() {
  const { orderId } = useParams()
  const { getOrder } = useAppStore()
  const order = getOrder(orderId)
  const view = content[order?.status] ?? content.pending
  usePageTitle(view.title.replace('!', ''))

  if (!order) return <Navigate to="/profil/pesanan" replace />

  return (
    <PaymentLayout step={order.status === 'paid' ? 3 : 2}>
      <section className="card status-card">
        <img src={view.image} alt="" />
        <h1 className="heading-5">{view.title}</h1>
        <p className="body-small-regular">{view.message}</p>
        <div className="status-actions">
          <Button to="/profil/pesanan">Lihat Detail Pesanan</Button>
          {order.status === 'paid' && (
            <Button variant="primary-color-3" to={`/belajar/${order.courseId}`}>Mulai Belajar</Button>
          )}
          {order.status === 'pending' && (
            <Button variant="primary-color-3" to={`/pembayaran/${order.id}`}>Lanjutkan Pembayaran</Button>
          )}
        </div>
      </section>
    </PaymentLayout>
  )
}

export default PaymentStatusPage
