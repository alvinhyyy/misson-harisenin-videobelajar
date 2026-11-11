import { formatPrice } from '../../utils/format.js'

function OrderSummary({ title = 'Ringkasan Pesanan', rows, total, children }) {
  return (
    <div className="order-summary">
      <h2 className="heading-6">{title}</h2>
      <dl>
        {rows.map((row) => (
          <div key={row.label} className="order-row">
            <dt>{row.label}</dt>
            <dd>{formatPrice(row.value)}</dd>
          </div>
        ))}
        <div className="order-row order-total">
          <dt>Total Pembayaran</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>
      {children}
    </div>
  )
}

export default OrderSummary
