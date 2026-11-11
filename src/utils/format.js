export function formatPrice(value) {
  return `Rp ${Number(value).toLocaleString('id-ID')}`
}

export function formatShortPrice(value) {
  if (!value) return 'Gratis'
  if (value >= 1000000) return `Rp ${Number((value / 1000000).toFixed(1)).toLocaleString('id-ID')}JT`
  if (value >= 1000) return `Rp ${Math.round(value / 1000)}K`
  return formatPrice(value)
}

export function formatDateTime(value) {
  if (!value) return '-'
  const date = new Date(value)
  const day = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  const time = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
  return `${day}, ${time}`
}

export function discountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0
  return Math.round((1 - price / originalPrice) * 100)
}

export function createId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`
}
