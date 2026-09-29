# SELF_ASSESSMENT_REPORT.md

| Criterion | Mark | Evidence |
|---|---:|---|
| 1. cartTotal behaves as specified | 30/30 | `src/cart.js`; `npm test` passed 6/6. Tests cover the worked example returning 467400, empty cart returning 0, free shipping at the threshold, negative price throwing RangeError, and invalid quantity throwing RangeError. |
| 2. Tests | 20/20 | `test/cart.test.js`; 6 tests cover the worked example, empty cart, free-shipping threshold, rounding/result type, negative price, and invalid positive-integer quantity. `npm test` passed 6/6. |
| 3. The harness | 20/20 | `CLAUDE.md` contains project rules, stack, commands, and a Never rule. `scripts/lint.mjs` provides the lint gate. `.github/workflows/ci.yml` runs test and lint on push/pull request. CI run #3 for commit `4a7ea9d` completed successfully. |
| 4. The brief | 15/15 | `BRIEF.md`; specifies allowed files, the cartTotal contract, error cases, no dependencies, and the existing `node:test` setup. |
| 5. AI-LOG.md | 15/15 | `AI-LOG.md`; records the AI tool used, what it produced, what I reviewed and changed, and what I wrote by hand. The entries can be checked against commits `fa74d90`, `92e174a`, and `4a7ea9d`. |

## Total

**100/100**

## What I did not manage

I did not add additional behavior beyond the assignment specification. I also kept the solution dependency-free and used the existing `node:test` setup rather than adding external testing or linting packages.