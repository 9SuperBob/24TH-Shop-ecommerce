import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({
  cart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setCart,
}) {
  const [open, setOpen] = useState(false);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gray-700 shadow-sm">
      {/* Nav */}
      <nav className="flex justify-between p-5  container mx-auto ">
        <h1 className="text-4xl text-white font-semiboldbold  ">24HR Shop</h1>

        <div
          className="flex gap-5 
         items-center"
        >
          <Link to="/" className="text-white hover:border-b px-5 py-2">
            Home
          </Link>
          <button
            onClick={() => setOpen(true)}
            className=" px-5 py-2 text-white hover:border-b"
          >
            ({cart.length})Shopping Cart
          </button>
          {/* Nav */}

          {/* slide cart */}
          {open && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setOpen(false)}
              />

              <div className="absolute right-0 top-0 h-full w-full overflow-y-auto rounded-l-2xl bg-gray-100 p-4 shadow-2xl sm:w-96 sm:p-5">
                {/* Header */}
                <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-md ring-1 ring-zinc-950/5">
                  <h2 className="text-xl font-bold">Shopping Cart</h2>

                  <button onClick={() => setOpen(false)} className="grid size-9 place-items-center rounded-lg text-2xl transition hover:bg-zinc-100">
                    ✕
                  </button>
                </div>
                {/* slide cart */}

                {cart.length === 0 ? (
                  <p className="mt-5 rounded-xl bg-white p-4 text-center text-zinc-600 shadow-md ring-1 ring-zinc-950/5">No Product</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id}>
                      <div className="mb-4 mt-4 rounded-xl bg-white p-4 text-center shadow-md ring-1 ring-zinc-950/5">
                        <div className="mt-1 flex items-center justify-between gap-4 pb-4">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-20 w-20 shrink-0 rounded-xl border border-zinc-200 object-cover"
                          />

                          <div>
                            <h3 className="font-medium">{item.title}</h3>

                            <p className="text-gray-500">
                              {(item.price * item.quantity).toFixed(2)} $
                            </p>

                            <p>QTY : {item.quantity}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-2 rounded-md border border-red-500 px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                          >
                            Remove QTY
                          </button>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="mt-2 rounded-md border border-zinc-300 px-3 py-2 text-sm transition hover:bg-zinc-100"
                          >
                            Add more
                          </button>

                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="mt-2 rounded-md border border-zinc-300 px-3 py-2 text-sm transition hover:bg-zinc-100"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <div className="mt-5 rounded-xl bg-white p-4 shadow-md ring-1 ring-zinc-950/5">
                  <div className="flex justify-between">
                    <p>ProductTotal</p>
                    <p>QTY : {totalQuantity}</p>
                  </div>
                  <div className="flex justify-between  ">
                    <p>SubTotal </p>
                    <p className="">${totalPrice.toFixed(2)} </p>
                  </div>
                  <p className="flex justify-start text-xs">
                    Shipping and taxes calculated at checkout.
                  </p>
                  {/* <button
                    className="border-4  bg-blue-600 rounded-md text-white mx-auto w-full h-12 m-7"
                    onClick={() => {
                      alert("Checkout สำเร็จ");
                      setCart([]);
                    }}
                  >
                    Check out
                  </button> */}
                  <Link
                    to="/checkout"
                    className="mt-3 flex w-full justify-center rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-500"
                  >
                    Check out
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
