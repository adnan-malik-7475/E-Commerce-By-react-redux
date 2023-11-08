import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeAll } from '/src/app/features/Slice';

function Checkout() {
  const cartProducts = useSelector((state) => state.products.cart);
  console.log(cartProducts);
  const dispatch = useDispatch();
  const removeToCart = () => {
    dispatch(removeAll());
    console.log("removeAll", cartProducts);
  };

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

      <div class=" w-full rounded text-xl">
        <div class="font-bold">
          <div className=" flex justify-between py-6 shadow">
            <th className="px-6">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="px-6">Subtotal</th>
          </div>
        </div>
        <div>
          {cartProducts.map((product, index) => (
            <div class="text-center flex justify-between py-6 shadow items-center mt-12">
              <div class="ml-2">
                <div className="flex justify-center items-center">
                  <img src={product.image} className="w-12 h-12" />
                  <h1>{product.title}</h1>
                </div>
              </div>

              <div class="mr-8">${product.newPrice}</div>

              <div class="mr-16">
                <div className="flex justify-center ">
                  <div className="border-2 flex items-center justify-between border-gray-500 rounded-md py-1 px-3">
                    <span className="mr-6">01</span>
                    <div className="flex flex-col">
                      <button
                        className="text-xs mb-2"
                        onClick={() => {
                          incrementProduct();
                        }}
                      >
                        Ʌ
                      </button>
                      <button
                        className=" text-xs"
                        onClick={() => decrementProduct()}
                      >
                        V
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mr-12">$75{() => getTotals()}</div>
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
      <div className="rounded-md border-black border-2 mt-16 mb-4 w-1/3 py-8 px-4">
        <div className="font-bold text-xl">Cart Total</div>
        <div className="flex justify-between mt-4">
          <div>Subtotal:</div>
          <div>{() => getTotals}</div>
        </div>
        <hr />
        <div className="flex justify-between mt-4">
          <div>Shipping</div>
          <div>Free</div>
        </div>
        <hr />
        <div className="flex justify-between mt-4">
          <div>Total:</div>
          <div>$1750</div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-10 py-4 rounded-md text-[#FAFAFA] bg-[#DB4444]">
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

export default Checkout;
