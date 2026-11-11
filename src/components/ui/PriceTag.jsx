import { formatShortPrice } from '../../utils/format.js'

function PriceTag({ price, originalPrice, className = '' }) {
  const hasDiscount = originalPrice && originalPrice > price

  return (
    <span className={`price-tag ${className}`.trim()}>
      {hasDiscount && <s className="price-original">{formatShortPrice(originalPrice)}</s>}
      <strong className="course-price">{formatShortPrice(price)}</strong>
    </span>
  )
}

export default PriceTag
