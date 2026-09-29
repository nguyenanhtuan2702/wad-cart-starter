# AI-LOG.md

## AI tool
GitHub Copilot in VS Code.

## What I asked the assistant to do
I gave Copilot the project brief and asked it to implement `cartTotal(items, options)` in `src/cart.js` and add/update tests for the specified behavior.

The brief required:
- subtotal + VAT + shipping
- free shipping when subtotal reaches `freeShipFrom`
- empty cart returns `0`
- negative `price` throws `RangeError`
- non-positive or non-integer `qty` throws `RangeError`
- result is a JavaScript number rounded to a whole đồng
- no external dependencies
- use the existing `node:test` setup

## What the assistant produced
Copilot modified:
- `src/cart.js`
- `test/cart.test.js`

The implementation:
- returns `0` for an empty cart
- validates negative prices with `RangeError`
- validates `qty` with `Number.isInteger(...)` and `qty <= 0`
- applies the free-shipping threshold
- calculates VAT
- uses `Math.round(...)` for the final result

Copilot also added tests covering:
- the worked example (`467400`)
- empty cart
- free-shipping threshold
- whole-number rounding / result type
- negative price
- invalid quantities (`0`, `-1`, `1.5`)

## What I reviewed and changed
I reviewed the full Git diff before running the tests, as required by the assignment.

I checked that:
- no external dependency was added
- `toFixed(0)` was not used as the returned value
- the required edge cases were handled
- the tests checked the specification rather than internal implementation details

I did not reject any of the final implementation changes from Copilot.

I also removed an accidentally created unrelated filename from the repository before continuing.

## What I wrote by hand
I wrote the project rules file (`CLAUDE.md`) and the task brief (`BRIEF.md`) based on the assignment specification.

I also performed the Git, test, lint, and CI steps and reviewed the changes before committing them.

## Verification
Before implementation:
- `npm test` failed because `cartTotal` was not implemented.

After implementation:
- `npm test` passed: 6 tests, 0 failures.
- `npm run lint` passed.
- GitHub Actions CI passed after the implementation commit.

## Git evidence
- `fa74d90` — `chore: set up project harness`
- `92e174a` — `docs: add cartTotal brief`
- `4a7ea9d` — `feat: implement cart total`

The final CI run for `feat: implement cart total` completed successfully.