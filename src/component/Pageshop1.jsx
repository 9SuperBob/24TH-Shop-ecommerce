import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Pageshop1({ items, addToCrat }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  const filteredItems = items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory = category === "all" || product.category === category;

    return matchCategory && matchSearch;
  });

  const sortedItems = [...filteredItems];

  if (sort === "low") {
    sortedItems.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    sortedItems.sort((a, b) => b.price - a.price);
  }
  if (sort === "rating") {
    sortedItems.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container mx-auto ">
      <div className="mb-8 rounded-2xl bg-gray-700 p-5 shadow-md ring-1 ring-zinc-950/5">
        <div className="mb-4">
          <input
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <select
              className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-zinc-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
            >
              <option value="all"> All</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
          <div>
            <select
              className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-zinc-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
            >
              <option value="sort">Sort by</option>
              <option value="low">Low To Hight</option>
              <option value="high">High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 rounded-2xl bg-gray-100 p-5 shadow-lg ring-1 ring-zinc-950/5 sm:grid-cols-2 lg:grid-cols-4">
        {sortedItems.map((product) => (
          <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer ">
            <div className="h-full mx-auto   ">
              <div className=" rounded-4xl h-full bg-gray-200 shadow-lg">
                <img className="h-50 mx-auto " src={product.images[0]} />
                <div className="flex justify-center mb-4">
                  <button
                    onClick={() => addToCrat(product)}
                    className="border border-red-500 rounded-sm  h-10 w-25 text-white bg-red-500 hover:bg-red-400"
                  >
                    Add to Cart
                  </button>
                </div>
                <p className="flex justify-center text-2xl mb-5 ">{product.title}</p>
                <p className="text-center text-sm mb-5 mx-1 text-gray-500">{product.description}</p>
                <div className="flex justify-between gap-5 mb-3 mx-2">
                  <p className="text-2xl text-gray-500 ">stock : {product.stock}</p>
                  <p className="text-3xl  text-red-500 ">
                    {product.price}${" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pageshop1;
