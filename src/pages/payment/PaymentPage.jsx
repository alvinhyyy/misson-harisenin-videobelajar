import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import PaymentLayout from '../../components/layout/PaymentLayout.jsx'
import OrderSummary from '../../components/payment/OrderSummary.jsx'
import MethodLogo from '../../components/payment/MethodLogo.jsx'
import CountdownBanner from '../../components/payment/CountdownBanner.jsx'
import CourseSummaryCard from '../../components/course/CourseSummaryCard.jsx'
import Accordion from '../../components/ui/Accordion.jsx'
import Button from '../../components/ui/Button.jsx'
import { findPaymentMethod, getPaymentGuides } from '../../data/payments.js'
import { useAppStore } from '../../store/useAppStore.js'
import usePageTitle from '../../hooks/usePageTitle.js'

const PAYMENT_WINDOW_MS = 60 * 60 * 1000

function PaymentPage() {
  usePageTitle('Pembayaran')
  const { orderId } = useParams()
  const navigate = useNavigate()
  const { getOrder, getCourse, payOrder, profile } = useAppStore()
  const [copied, setCopied] = useState(false)
  const order = getOrder(orderId)

  if (!order) return <Navigate to="/profil/pesanan" replace />
  if (order.status !== 'pending') return <Navigate to={`/pembayaran/${orderId}/status`} replace />

  const course = getCourse(order.courseId)
  const method = findPaymentMethod(order.methodId)
  const vaNumber = order.vaNumber ?? `${method.prefix} ${profile.phone}`
  const guides = getPaymentGuides(method)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(vaNumber.replace(/\s/g, ''))
    } catch {
      // clipboard unavailable: still show feedback so the user can copy manually
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePay = () => {
    payOrder(order.id)
    navigate(`/pembayaran/${order.id}/status`)
  }

  return (
    <PaymentLayout
      step={1}
      banner={<CountdownBanner deadline={new Date(order.createdAt).getTime() + PAYMENT_WINDOW_MS} />}
    >
      <div className="payment-layout">
        <div className="payment-column">
          <section className="card payment-card">
            <h1 className="heading-6">Metode Pembayaran</h1>
            <div className="va-box">
              <MethodLogo method={method} large />
              <p className="body-medium-regular">
                {method.groupId === 'bank' ? `Bayar Melalui Virtual Account ${method.short.toUpperCase()}` : `Bayar Melalui ${method.name}`}
              </p>
              <p className="va-number">
                <span>{vaNumber}</span>
                <button type="button" className="text-button" onClick={handleCopy}>
                  {copied ? 'Tersalin!' : 'Salin'}
                </button>
              </p>
            </div>

            <OrderSummary
              rows={[
                { label: `Video Learning: ${order.courseTitle}`, value: order.price },
                { label: 'Biaya Admin', value: order.adminFee },
              ]}
              total={order.total}
            >
              <div className="button-row">
                <Button variant="primary-color-3" to={`/pembayaran/${order.id}/ubah`}>Ganti Metode Pembayaran</Button>
                <Button onClick={handlePay}>Bayar Sekarang</Button>
              </div>
            </OrderSummary>
          </section>

          <section className="card payment-card">
            <h2 className="heading-6">Tata Cara Pembayaran</h2>
            <div className="guide-list">
              {guides.map((guide, index) => (
                <Accordion key={guide.title} title={guide.title} defaultOpen={index === 0} className="guide">
                  <ol>
                    {guide.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </Accordion>
              ))}
            </div>
          </section>
        </div>

        {course && <CourseSummaryCard course={course} showImage className="payment-course" />}
      </div>
    </PaymentLayout>
  )
}

export default PaymentPage
