import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="w-[75%] m-auto">
      <div >
        <div className="flex gap-3 text-lg text-gray-500 mt-8 mb-4">
          <Link to="/">Home</Link>
          <div>/</div>
          <h1 className="text-black">Cart</h1>
        </div>
      </div>

      <table class="table-auto w-full  rounded border-separate border-spacing-y-10 text-xl">
        <thead class=" font-bold ">
          <tr className="border">
            <th >Product</th>
            <th >Price</th>
            <th >Quantity</th>
            <th >Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="p-4">
              <div>
              <h1>LCD</h1>
              </div>
            </td>
            <td class="p-4">$650</td>
            <td class="p-4">
              <input
                type="number"
                className="w-16 h-10 border border-gray-300 rounded-md px-2"
              />
            </td>
            <td class="p-4">$650</td>
          </tr>
          <tr class="text-center">
            <td class="p-4">
              <div>
              <h1>LCD</h1>
              </div>
            </td>
            <td class="p-4">$400</td>
            <td class="p-4">
              <input
                type="number"
                className="w-16 h-10 border border-gray-300 rounded-md px-2"
              />
            </td>
            <td class="p-4">$400</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between text-center">
      <Link to="/products" className="px-16 py-4  rounded-md border-black border-2 hover:bg-rose-700 hover:text-white">Return to Products</Link>
      <button className="px-16 py-4 rounded-md border-black border-2 hover:bg-rose-700 hover:text-white">Remove All</button>
      </div>
      <div className="rounded-md  border-2 border-black mt-16 mb-4 w-1/3 py-6 px-4">
  <div className="font-bold text-2xl text-rose-700 mb-4">Cart Total</div>
  <div className="flex justify-between mt-4">
    <div className="text-black">Subtotal:</div>
    <div className="text-black">$1050</div>
  </div>
  <hr className="my-2 border-black" />
  <div className="flex justify-between mt-4">
    <div className="text-black">Shipping:</div>
    <div className="text-black">$20</div>
  </div>
  <hr className="my-2 border-black" />
  <div className="flex justify-between mt-4">
    <div className="font-bold text-2xl">Total:</div>
    <div className="font-bold text-rose-700 text-2xl">$1070</div>
  </div>
  <div className="flex justify-center mt-6">
    <button className="px-12 py-4 rounded-md text-white bg-rose-700 hover:bg-rose-900 hover:text-white">
      Proceed to Checkout
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default Checkout;