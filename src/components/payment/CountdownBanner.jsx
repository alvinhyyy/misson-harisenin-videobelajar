import { useEffect, useState } from 'react'

const pad = (value) => String(value).padStart(2, '0')

function CountdownBanner({ deadline }) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  const remaining = Math.max(0, Math.floor((new Date(deadline).getTime() - now) / 1000))
  const parts = [Math.floor(remaining / 3600), Math.floor((remaining % 3600) / 60), remaining % 60]

  return (
    <div className="countdown-banner" role="timer">
      <div className="home-container countdown-inner">
        {remaining > 0 ? (
          <>
            <span>Selesaikan pemesanan dalam</span>
            <span className="countdown-time">
              {parts.map((part, index) => (
                <span key={index}>
                  {index > 0 && <b>:</b>}
                  <time>{pad(part)}</time>
                </span>
              ))}
            </span>
          </>
        ) : (
          <span>Batas waktu pembayaran telah habis, silakan pilih metode pembayaran ulang.</span>
        )}
      </div>
    </div>
  )
}

export default CountdownBanner
