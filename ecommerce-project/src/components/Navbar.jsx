import React from "react";
import SVG from "./SVG";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.products.cart);
  const favouriteProducts = useSelector(
    (state) => state.products.favouriteProducts
  );
  const products = useSelector((state) => state.products.moveAllToCart);
  return (
    <nav className="bg-white flex justify-between items-center px-4 py-5 w-[1170px] m-auto">
      <div className="flex w-1/3 justify-between items-center">
        <div className="font-bold text-4xl">Exclusive</div>
        <div className="flex gap-10">
          <Link
            to="/"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Products
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="border px-3 py-1.5 flex rounded-md bg-gray-100">
          <input
            placeholder="What are you looking for?"
            className="outline-none bg-gray-100"
          ></input>
          <SVG
            width={24}
            height={24}
            pathName="Search"
            viewBox="0 0 24 24"
            strokeColor="black"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </div>
        <div className="relative">
          <SVG
            width={32}
            height={32}
            viewBox="0 0 32 32"
            pathName="Wishlist"
            strokeColor="black"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <div className="absolute bottom-4 left-4 bg-[#DB4444] rounded-full px-2 text-white">
            {favouriteProducts.length}
          </div>
        </div>

        <Link to="/checkout">
          <div className="relative">
            <SVG
              width={32}
              height={32}
              viewBox="0 0 32 32"
              pathName="Cart1"
              pathName2="Cart2"
              pathName3="Cart3"
              pathName4="Cart4"
              strokeColor="black"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <div className="absolute bottom-4 left-4 bg-[#DB4444] rounded-full px-2 text-white">
              {cart.length}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
