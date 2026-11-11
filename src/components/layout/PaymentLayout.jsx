import Navbar from './Navbar.jsx'
import Icon from '../ui/Icon.jsx'

const STEPS = ['Pilih Metode', 'Bayar', 'Selesai']

function PaymentLayout({ step, banner, children }) {
  return (
    <div className="home-page payment-page">
      <Navbar>
        <ol className="stepper" aria-label="Langkah pembayaran">
          {STEPS.map((label, index) => {
            const state = index < step ? 'done' : index === step ? 'current' : 'todo'
            return (
              <li key={label} className={`stepper-step stepper-${state}`} aria-current={state === 'current' ? 'step' : undefined}>
                <span className="stepper-dot">{state === 'done' && <Icon name="check" size={14} />}</span>
                <span className="stepper-label">{label}</span>
              </li>
            )
          })}
        </ol>
      </Navbar>
      {banner}
      <main className="home-container payment-main">{children}</main>
    </div>
  )
}

export default PaymentLayout
