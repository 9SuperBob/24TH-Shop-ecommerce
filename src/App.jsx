import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Pageshop1 from "./component/Pageshop1";
import Hero from "./component/Hero";

// function page
import ProductDetail from "./function/ProductDetail";
import Checkout from "./function/Checkout";
import Footer from "./component/Footer";

function App() {
  const { pathname } = useLocation();
  const [items, setItem] = useState([]);

  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");

    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  {
    /* เช็คสินค้าบน cart มีให้+1 ไม่มีเพิ่มใหม่ */
  }
  function addToCrat(product) {
    const CheckProduct = cart.find((item) => item.id === product.id);

    if (CheckProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  {
    /* เช็คสินค้าบน cart มีให้+1 ไม่มีเพิ่มใหม่ */
  }

  {
    /* อ่าน api */
  }
  useEffect(() => {
    async function getItems() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setItem(data.products);
    }

    getItems();
  }, []);
  {
    /* อ่าน api */
  }

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    console.log("Crat : ", cart);
  }, [cart]);

  return (
    <>

      <Navbar
        setCart={setCart}
        cart={cart}
        addToCrat={addToCrat}
        increaseQuantity={increaseQuantity}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
      />
      <main className="pt-24">
        {pathname === "/" && <Hero />}
        {/* <Pageshop1 items={items} addToCrat={addToCrat} /> */}
        <Routes>
          <Route
            path="/"
            element={<Pageshop1 items={items} addToCrat={addToCrat} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail items={items} addToCrat={addToCrat} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                setCart={setCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
        <Footer/>
      </main>
      {/* <Checkout/> */}
    </>
  );
}

export default App;
