import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import PaymentLayout from '../../components/layout/PaymentLayout.jsx'
import PaymentMethodSelector from '../../components/payment/PaymentMethodSelector.jsx'
import OrderSummary from '../../components/payment/OrderSummary.jsx'
import CourseSummaryCard from '../../components/course/CourseSummaryCard.jsx'
import Button from '../../components/ui/Button.jsx'
import { useAppStore } from '../../store/useAppStore.js'
import usePageTitle from '../../hooks/usePageTitle.js'

function ChangePaymentPage() {
  usePageTitle('Ubah Metode Pembayaran')
  const { orderId } = useParams()
  const navigate = useNavigate()
  const { getOrder, getCourse, updateOrderMethod } = useAppStore()
  const order = getOrder(orderId)
  const [methodId, setMethodId] = useState(order?.methodId)

  if (!order) return <Navigate to="/profil/pesanan" replace />
  if (order.status !== 'pending') return <Navigate to={`/pembayaran/${orderId}/status`} replace />

  const course = getCourse(order.courseId)

  const handleSave = () => {
    updateOrderMethod(order.id, methodId)
    navigate(`/pembayaran/${order.id}`)
  }

  return (
    <PaymentLayout step={1}>
      <div className="payment-layout">
        <div className="payment-column">
          <section className="card payment-card">
            <OrderSummary
              title="Ringkasan Belanja"
              rows={[
                { label: 'Total Harga (1 kelas)', value: order.price },
                { label: 'Biaya Admin', value: order.adminFee },
              ]}
              total={order.total}
            />
          </section>

          <section className="card payment-card">
            <h1 className="heading-6">Ubah Metode Pembayaran</h1>
            <PaymentMethodSelector value={methodId} onChange={setMethodId} defaultOpen={false} />
            <Button className="block-button" onClick={handleSave}>Simpan &amp; Lanjut Bayar</Button>
          </section>
        </div>

        {course && <CourseSummaryCard course={course} showImage className="payment-course" />}
      </div>
    </PaymentLayout>
  )
}

export default ChangePaymentPage
