# Cart Drawer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Navbar cart button open a working Headless UI drawer that renders the current cart.

**Architecture:** `App.jsx` owns both cart data and drawer visibility, passing small callbacks and values to `Navbar` and `Cart_react`. `Cart_react` derives display-only values from the supplied cart.

**Tech Stack:** React 19, Vite, Tailwind CSS 4, Headless UI 2, Heroicons 2.

## Global Constraints

- Use the existing dummyjson product fields: `id`, `title`, `price`, and `images`.
- Keep drawer visibility in `App.jsx`.
- Do not alter unrelated project files.

---

### Task 1: Wire drawer visibility through the application

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/component/Navbar.jsx`
- Modify: `src/function/Cart_react.jsx`

**Interfaces:**
- `Navbar` consumes `cart` and `onOpenCart`.
- `Cart_react` consumes `cart`, `open`, and `onClose`.

- [ ] **Step 1: Verify the current failure**

Run: `rg -n "CartRa|onOpenCart|open=" src`

Expected: `CartRa` is imported but not rendered; Navbar has no open callback.

- [ ] **Step 2: Implement the state flow**

Add `const [isCartOpen, setIsCartOpen] = useState(false)` in `App.jsx`; pass `() => setIsCartOpen(true)` to Navbar; render `CartRa` with `cart`, `open={isCartOpen}`, and `onClose={() => setIsCartOpen(false)}`. Replace the static Cart output.

- [ ] **Step 3: Render cart data safely**

In `Cart_react.jsx`, remove its local visibility state and use the supplied props. Render an empty-state message for an empty cart and compute the subtotal with `cart.reduce((total, item) => total + Number(item.price || 0), 0)`.

- [ ] **Step 4: Check static references**

Run: `rg -n "product\\.|useState|Open drawer" src/function/Cart_react.jsx`

Expected: no stale `product`, local state, or duplicate open button remains.

### Task 2: Restore build dependency and verify

**Files:**
- Modify: `package-lock.json` only if npm refreshes it

**Interfaces:**
- Vite loads the Tailwind plugin and its Windows optional binary.

- [ ] **Step 1: Reinstall the existing dependency graph**

Run: `npm install`

Expected: the optional Windows Tailwind binary resolves from the lockfile.

- [ ] **Step 2: Run checks**

Run: `npm run lint` and `npm run build`

Expected: both commands exit with code 0.
