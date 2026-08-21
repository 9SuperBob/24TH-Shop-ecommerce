# Cart Drawer Design

## Goal

Replace the static cart section with the Headless UI cart drawer and open it from the Navbar cart button.

## Design

`App.jsx` owns the cart contents and the drawer's open state. It passes an `onOpenCart` callback to `Navbar`, and passes `cart`, `open`, and `onClose` to `Cart_react`.

`Cart_react.jsx` is presentational: it renders the supplied cart, closes through its callback, shows an empty-cart message when appropriate, and derives a numeric subtotal from the products' prices. It does not own cart visibility.

## Constraints

- Retain the existing dummyjson product shape (`id`, `title`, `price`, `images`).
- Keep Headless UI and Heroicons as runtime dependencies.
- Repair the local Tailwind/Vite optional binary dependency and verify the production build.
