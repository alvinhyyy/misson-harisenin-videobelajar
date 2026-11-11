import { Link } from 'react-router-dom'
import StatusBadge from '../ui/StatusBadge.jsx'
import Button from '../ui/Button.jsx'
import { formatDateTime, formatPrice } from '../../utils/format.js'
import { ORDER_STATUS } from '../../data/payments.js'

function OrderCard({ order, onDelete }) {
  const status = ORDER_STATUS[order.status]

  return (
    <article className="list-card">
      <header className="list-card-header order-header">
        <span>
          No. Invoice: <Link to={`/pembayaran/${order.id}/status`} className="invoice-link">{order.invoice}</Link>
        </span>
        <span>Waktu Pembayaran: {formatDateTime(order.paidAt ?? order.createdAt)}</span>
        <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
      </header>

      <div className="list-card-body order-body">
        <img className="order-image" src={order.courseImage} alt="" />
        <h3 className="body-medium-medium order-title">{order.courseTitle}</h3>
        <div className="order-price">
          <span>Harga</span>
          <strong>{formatPrice(order.price)}</strong>
        </div>
      </div>

      <footer className="list-card-footer order-footer">
        <span>Total Pembayaran</span>
        <div className="order-footer-right">
          {order.status === 'pending' && (
            <>
              <button type="button" className="text-button text-danger" onClick={() => onDelete(order)}>
                Batalkan
              </button>
              <Button to={`/pembayaran/${order.id}`} className="small-button">Bayar</Button>
            </>
          )}
          {order.status === 'failed' && (
            <button type="button" className="text-button text-danger" onClick={() => onDelete(order)}>
              Hapus
            </button>
          )}
          <strong className="order-total-value">{formatPrice(order.total)}</strong>
        </div>
      </footer>
    </article>
  )
}

export default OrderCard
