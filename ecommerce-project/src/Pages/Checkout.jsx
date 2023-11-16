import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeAll } from "/src/app/features/Slice";
import ReactToPrint from "react-to-print";
import { increaseQuantity, decreaseQuantity } from "../app/features/Slice";

function Checkout() {
  const cartProducts = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const removeToCart = () => {
    dispatch(removeAll());
  };
  const incProduct = (title) => {
    dispatch(increaseQuantity(title));
  };
  const decProduct = (title) => {
    dispatch(decreaseQuantity(title));
  };
  const componentRef = useRef();
  return (
    <div>
      <Navbar />
      <hr />
      <div className="w-[78%] m-auto">
        <div className="mt-16 mb-24">
          <div className="flex gap-3 text-lg text-gray-500 ">
            <Link to="/">Home</Link>
            <div>/</div>
            <h1 className="text-black">Cart</h1>
          </div>
        </div>

        <div className=" w-full rounded text-xl">
          <div>
            <div className=" flex justify-between py-6 shadow-md">
              <th className="px-6 font-medium">Product</th>
              <th className="font-medium">Price</th>
              <th className="font-medium">Quantity</th>
              <th className="px-6 font-medium">SubTotal</th>
            </div>
          </div>
          <div>
            {cartProducts.map((product, index) => (
              <div class="text-center flex justify-between py-6 shadow-md items-center mt-12">
                <div class="ml-2">
                  <div className="flex justify-center items-center">
                    <img src={product.image} className="w-12 h-12" />
                    <h1>{product.title}</h1>
                  </div>
                </div>

                <div class="mr-8">${product.newPrice}</div>

                <div class="mr-16 text-sm">
                  <div className="flex justify-center ">
                    <div className="border-2 flex items-center justify-between border-gray-500 rounded-md py-1 px-2">
                      <span className="mr-6">{product.quantity}</span>
                      <div className="flex flex-col">
                        <button
                          onClick={() => {
                            incProduct(product.title);
                          }}
                        >
                          Ʌ
                        </button>
                        <button
                          onClick={() => {
                            decProduct(product.title);
                          }}
                        >
                          V
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mr-12">${product.newPrice * product.quantity} </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-center mt-10">
          <Link
            to="/products"
            className="px-16 py-4  rounded-md border-black border-2"
          >
            Return to Products
          </Link>
          <button
            className="px-16 py-4 rounded-md border-black border-2"
            onClick={() => removeToCart()}
          >
            Remove All
          </button>
        </div>
        <div
          ref={componentRef}
          className="rounded-md border-black border-2 mt-16 mb-4 w-1/3 py-8 px-4"
        >
          <div className="font-bold text-xl">Cart Total</div>
          <div className="flex justify-between mt-4">
            <div>Subtotal:</div>
            <div>$1740</div>
          </div>
          <hr />
          <div className="flex justify-between mt-4">
            <div>Shipping:</div>
            <div>$10</div>
          </div>
          <hr />
          <div className="flex justify-between mt-4">
            <div>Total:</div>
            <div> $1750</div>
          </div>
          <div className="flex justify-center mt-8">
            <ReactToPrint
              trigger={() => (
                <button className="px-10 py-4 rounded-md text-[#FAFAFA] bg-[#DB4444]">
                  Download Receipt
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
