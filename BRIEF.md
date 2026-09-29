# Brief — cartTotal

Implement `cartTotal(items, options)` in `src/cart.js`.

## Scope
You may modify:
- `src/cart.js`
- tests related to `cartTotal`

Do not modify unrelated project files.

## Contract
`cartTotal(items, options)` must:
- calculate subtotal as the sum of `price * qty`
- calculate VAT using `vatRate`
- charge `shipFee` when subtotal is below `freeShipFrom`
- charge 0 shipping when subtotal is greater than or equal to `freeShipFrom`
- return 0 for an empty cart
- return the final result rounded to the nearest whole đồng
- return a JavaScript number

## Errors
Throw `RangeError` when:
- an item has a negative `price`
- an item's `qty` is not a positive integer

## Constraints
- Plain JavaScript only
- No external dependencies
- Use the existing test setup with `node:test`
- Do not use `toFixed(0)` as the returned value because it returns a string