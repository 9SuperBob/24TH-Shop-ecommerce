import { useState } from "react";
import {
  BanknotesIcon,
  CreditCardIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";

function Checkout({
  cart,
  setCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is Empty order fail");
      return;
    }

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      paymentMethod === ""
    ) {
      alert("Enter your Information ");
      return;
    }

    alert("Order Success");

    setCart([]);

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPaymentMethod("");
  }

  return (
    <div className="container mx-auto p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-5 rounded-2xl bg-gray-100 p-5 shadow-lg ring-1 ring-zinc-950/5 lg:grid-cols-2">
        <div className="rounded-2xl bg-white shadow-md ring-1 ring-zinc-950/5">
          <p className="px-5 pt-5 text-3xl font-semibold text-zinc-900">Shipping Information</p>
          <form
            id="checkout-form"
            className="mx-5 my-5 flex flex-col"
            onSubmit={handleSubmit}
          >
            <input
              className="mb-3 h-11 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              type="text"
              placeholder=" Name :"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="mb-3 h-11 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              type="email"
              placeholder=" Email :"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="mb-3 h-11 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              type="tel"
              placeholder=" Number :"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="mb-3 h-11 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              type="text"
              placeholder=" Address :"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <fieldset className="mt-3">
              <legend className="text-base font-medium text-zinc-900">
                Payment Methods

              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm transition has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                  <input
                    type="radio"
                    name="payment-method"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(event) => setPaymentMethod(event.target.value)}
                    className="accent-blue-600"
                  />
                  <CreditCardIcon className="size-5 text-blue-700" aria-hidden="true" />
                  <span>Credit card</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm transition has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                  <input
                    type="radio"
                    name="payment-method"
                    value="promptpay"
                    checked={paymentMethod === "promptpay"}
                    onChange={(event) => setPaymentMethod(event.target.value)}
                    className="accent-blue-600"
                  />
                  <QrCodeIcon className="size-5 text-blue-700" aria-hidden="true" />
                  <span>PromptPay</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm transition has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50">
                  <input
                    type="radio"
                    name="payment-method"
                    value="cash-on-delivery"
                    checked={paymentMethod === "cash-on-delivery"}
                    onChange={(event) => setPaymentMethod(event.target.value)}
                    className="accent-blue-600"
                  />
                  <BanknotesIcon className="size-5 text-blue-700" aria-hidden="true" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </fieldset>
            {/* <button className="border border-red-500 rounded-sm h-10 w-50 text-white bg-red-500 hover:bg-red-400">
              Place order
            </button> */}
          </form>
          <div className="border-t border-zinc-200 px-5 py-5 text-xl">
            <div className="flex justify-between mb-2">
              <p>ProductTotal</p>
              <p>QTY : {totalQuantity}</p>
            </div>
            <div className="flex justify-between">
              <p>SubTotal</p>
              <p className="text-red-500 border-b font-bold">
                $ {totalPrice.toFixed(2)}{" "}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="submit"
              form="checkout-form"
              disabled={!paymentMethod}
              className="mx-auto mt-5 h-12 w-full rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              Place order
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-zinc-950/5">
          <p></p>
          <div className="rounded-xl bg-zinc-50 px-5 py-3 ring-1 ring-zinc-950/5">
            <div className="flex justify-end gap-22 text-sm font-medium text-zinc-600">
              <p>Name</p>
              <p>Price</p>
              <p>Action</p>
              <p>Add & Delete</p>
            </div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="mt-3 rounded-xl border border-zinc-200 bg-white">
              <div className="mx-5 mt-4 flex items-center justify-between gap-4 pb-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-20 w-20 shrink-0 rounded-xl border border-zinc-200 object-cover"
                />
                <p className="font-medium items-center ">{item.title}</p>
                <p className="text-gray-500">
                  {(item.price * item.quantity).toFixed(2)} $
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="h-8 w-25 rounded-md border border-red-500 text-sm text-red-600 transition hover:bg-red-50"
                >
                  Delete
                </button>
                <div className="flex gap-2 ">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="h-8 w-8 rounded-md border border-zinc-300 transition hover:bg-zinc-100"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="h-8 w-8 rounded-md border border-zinc-300 transition hover:bg-zinc-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
