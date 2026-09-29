import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('returns zero for an empty cart', () => {
  assert.equal(cartTotal([], { vatRate: 0.1, freeShipFrom: 100, shipFee: 20 }), 0)
})

test('waives shipping when subtotal reaches the free-shipping threshold', () => {
  const options = { vatRate: 0, freeShipFrom: 100, shipFee: 20 }
  assert.equal(cartTotal([{ price: 100, qty: 1 }], options), 100)
})

test('rounds the result to a whole đồng number', () => {
  const total = cartTotal([{ price: 3, qty: 1 }], {
    vatRate: 0.2,
    freeShipFrom: 3,
    shipFee: 20,
  })
  assert.equal(total, 4)
  assert.equal(typeof total, 'number')
})

test('rejects a negative price', () => {
  assert.throws(
    () => cartTotal([{ price: -1, qty: 1 }], { vatRate: 0, freeShipFrom: 10, shipFee: 5 }),
    RangeError,
  )
})

test('rejects a quantity that is not a positive integer', () => {
  const options = { vatRate: 0, freeShipFrom: 10, shipFee: 5 }
  for (const qty of [0, -1, 1.5]) {
    assert.throws(() => cartTotal([{ price: 1, qty }], options), RangeError)
  }
})
