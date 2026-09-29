// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (items.length === 0) {
    return 0
  }

  let subtotal = 0
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('price must not be negative')
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('qty must be a positive integer')
    }
    subtotal += item.price * item.qty
  }

  const shipping = subtotal < options.freeShipFrom ? options.shipFee : 0
  return Math.round(subtotal + subtotal * options.vatRate + shipping)
}
