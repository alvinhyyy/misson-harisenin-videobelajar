import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import PaymentLayout from '../../components/layout/PaymentLayout.jsx'
import PaymentMethodSelector from '../../components/payment/PaymentMethodSelector.jsx'
import OrderSummary from '../../components/payment/OrderSummary.jsx'
import CourseSummaryCard from '../../components/course/CourseSummaryCard.jsx'
import Button from '../../components/ui/Button.jsx'
import { ADMIN_FEE } from '../../data/payments.js'
import { useAppStore } from '../../store/useAppStore.js'
import usePageTitle from '../../hooks/usePageTitle.js'

function CheckoutPage() {
  usePageTitle('Metode Pembayaran')
  const { courseId } = useParams()
  const navigate = useNavigate()
  const { getCourse, getEnrollment, createOrder } = useAppStore()
  const [methodId, setMethodId] = useState('bca')
  const course = getCourse(courseId)

  if (!course) return <Navigate to="/kelas" replace />
  if (getEnrollment(courseId)) return <Navigate to={`/belajar/${courseId}`} replace />

  const handleBuy = () => {
    const order = createOrder(courseId, methodId)
    navigate(`/pembayaran/${order.id}`)
  }

  return (
    <PaymentLayout step={0}>
      <div className="payment-layout">
        <div className="payment-column">
          <section className="card payment-card">
            <h1 className="heading-6">Metode Pembayaran</h1>
            <PaymentMethodSelector value={methodId} onChange={setMethodId} />
          </section>

          <section className="card payment-card">
            <OrderSummary
              rows={[
                { label: `Video Learning: ${course.title}`, value: course.price },
                { label: 'Biaya Admin', value: ADMIN_FEE },
              ]}
              total={course.price + ADMIN_FEE}
            >
              <Button className="block-button" onClick={handleBuy}>Beli Sekarang</Button>
            </OrderSummary>
          </section>
        </div>

        <CourseSummaryCard course={course} showImage className="payment-course" />
      </div>
    </PaymentLayout>
  )
}

export default CheckoutPage
