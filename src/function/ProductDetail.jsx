import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

function sanitizeQuantity(value, stock) {
  const quantity = Number.parseInt(value, 10);
  const maximum = Math.max(1, Number(stock) || 1);

  if (!Number.isFinite(quantity) || quantity < 1) {
    return 1;
  }

  return Math.min(quantity, maximum);
}

function getProductNavigation(items, currentId) {
  const currentIndex = items.findIndex((item) => item.id === Number(currentId));

  return {
    previousId: items[currentIndex - 1]?.id ?? null,
    nextId: items[currentIndex + 1]?.id ?? null,
  };
}

function RatingStars({ rating }) {
  const filledStars = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          aria-hidden="true"
          className={`h-5 w-5 ${index < filledStars ? "text-amber-400" : "text-zinc-300"}`}
        />
      ))}
      <span className="ml-1 text-sm text-zinc-600">
        {Number(rating).toFixed(1)}/5
      </span>
    </div>
  );
}

export default function ProductDetail({ items, addToCrat }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (items.length === 0) {
    return <p>Loading...</p>;
  }

  const product = items.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Loadling . . .</p>;
  }
  const { previousId, nextId } = getProductNavigation(items, id);
  const reviewCount = product.reviews?.length || 0;
  const averageRating = reviewCount
    ? product.reviews.reduce((total, review) => total + review.rating, 0) /
      reviewCount
    : product.rating || 0;
  const relatedProducts = items
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  function updateQuantity(value) {
    setQuantity(sanitizeQuantity(value, product.stock));
  }

  function addSelectedQuantity() {
    for (let index = 0; index < quantity; index += 1) {
      addToCrat(product);
    }
  }

  function buyNow() {
    addSelectedQuantity();
    navigate("/checkout");
  }

  return (
    <div className="container mx-auto p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-5 rounded-2xl bg-gray-100 p-5 shadow-lg ring-1 ring-zinc-950/5 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-white p-5 shadow-md ring-1 ring-zinc-950/5">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl bg-white px-5 py-6 shadow-md ring-1 ring-zinc-950/5">
            <p className="mb-7 text-4xl font-semibold text-zinc-900">{product.title}</p>
            <div className="mb-5 flex items-center gap-3">
              <RatingStars rating={averageRating} />
              <span className="text-sm text-zinc-600">
                {reviewCount} reviews
              </span>
            </div>
            <p className="mb-5 text-3xl font-semibold text-red-500">{product.price} $</p>
            <p className="text-zinc-600">{product.description}</p>
            <p className="my-3 text-lg font-medium text-zinc-800">Stock: {product.stock}</p>
            <div className="mt-5 flex items-center gap-2">
              <button
                type="button"
                className="h-10 w-10 rounded-lg border border-zinc-300 text-lg transition hover:bg-zinc-100"
                onClick={() => updateQuantity(quantity - 1)}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <label className="sr-only" htmlFor="product-quantity">
                Quantity
              </label>
              <input
                id="product-quantity"
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(event) => updateQuantity(event.target.value)}
                onBlur={(event) => updateQuantity(event.target.value)}
                className="h-10 w-20 rounded-lg border border-zinc-300 px-2 text-center outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
              <button
                type="button"
                className="h-10 w-10 rounded-lg border border-zinc-300 text-lg transition hover:bg-zinc-100"
                onClick={() => updateQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <div className="mt-3 flex gap-3">
              <button
                className="h-11 w-50 rounded-xl bg-red-500 text-white transition hover:bg-red-400"
                onClick={addSelectedQuantity}
              >
                Add to Cart
              </button>
              <button
                className="h-11 w-50 rounded-xl border border-zinc-900 text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
                onClick={buyNow}
              >
                Buy now
              </button>
            </div>
          </div>
          <div className="rounded-2xl bg-white shadow-md ring-1 ring-zinc-950/5">
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
              <p className="text-2xl font-semibold text-zinc-900">Review</p>
              <button className="h-10 w-30 rounded-xl bg-red-500 text-white transition hover:bg-red-400">Read more</button>
            </div>

            <div className="grid gap-4 px-5 py-4 sm:grid-cols-3">
              {product.reviews?.map((reviews, index) => (
                <div className="rounded-xl bg-zinc-50 p-3" key={index}>
                  <RatingStars rating={reviews.rating} />
                  <p>{reviews.comment}</p>
                  <p>Name : {reviews.reviewerName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-white p-5 shadow-md ring-1 ring-zinc-950/5">
        {previousId ? (
          <Link
            to={`/product/${previousId}`}
            className="rounded-xl border border-zinc-900 px-5 py-3 font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
          >
            ← Back page
          </Link>
        ) : (
          <span />
        )}
        {nextId && (
          <Link
            to={`/product/${nextId}`}
            className="rounded-xl border border-zinc-900 px-5 py-3 font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
          >
            Next page →
          </Link>
        )}
      </div>

      <section className="mt-8 rounded-2xl bg-gray-100 p-5 shadow-lg ring-1 ring-zinc-950/5" aria-labelledby="other-products-title">
        <h2 id="other-products-title" className="text-2xl font-semibold text-zinc-900">
          Other products in {product.category}
        </h2>
        {relatedProducts.length ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group rounded-2xl bg-white p-3 shadow-md ring-1 ring-zinc-950/5 transition hover:-translate-y-1 hover:ring-zinc-400"
              >
                <img
                  src={relatedProduct.thumbnail || relatedProduct.images?.[0]}
                  alt={relatedProduct.title}
                  className="h-40 w-full rounded-xl object-contain"
                />
                <p className="mt-3 font-medium group-hover:underline">{relatedProduct.title}</p>
                <p className="mt-1 text-sm text-zinc-600">${relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-zinc-600">No other products are available in this category.</p>
        )}
      </section>
    </div>
  );
}
