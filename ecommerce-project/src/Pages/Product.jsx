import React, { useState,useRef } from "react";
import Navbar from "../components/Navbar";
import SVG from "../components/SVG";
import { addCartItem, moveAllToCart } from "../app/features/Slice";
import { useDispatch } from "react-redux";

const Products = () => {
  const images = [
    {
      title: "Product 1",
      newPrice: "120",
      oldPrice: "160",
      discountInPercentage: "20",
      image:
        "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png",
    },
    {
      title: "Product 2",
      newPrice: "75",
      oldPrice: "100",
      discountInPercentage: "0",
      image:
        "https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png",
    },
    {
      title: "Product 3",
      newPrice: "50",
      oldPrice: "60",
      discountInPercentage: "16.67",
      image:
        "https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
    },
    {
      title: "Product 4",
      newPrice: "200",
      oldPrice: "250",
      discountInPercentage: "20",
      image:
        "https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png",
    },
    {
      title: "Product 5",
      newPrice: "90",
      oldPrice: "120",
      discountInPercentage: "0",
      image:
        "https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png",
    },
    {
      title: "Product 6",
      newPrice: "30",
      oldPrice: "40",
      discountInPercentage: "25",
      image:
        "https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png",
    },
    {
      title: "Product 7",
      newPrice: "80",
      oldPrice: "100",
      discountInPercentage: "0",
      image:
        "https://www.kasandbox.org/programming-images/avatars/primosaur-tree.png",
    },
    {
      title: "Product 8",
      newPrice: "70",
      oldPrice: "90",
      discountInPercentage: "22.22",
      image:
        "https://www.kasandbox.org/programming-images/avatars/primosaur-sapling.png",
    },
    {
      title: "Product 9",
      newPrice: "150",
      oldPrice: "180",
      discountInPercentage: "16.67",
      image:
        "https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png",
    },
    {
      title: "Product 10",
      newPrice: "110",
      oldPrice: "140",
      discountInPercentage: "21.43",
      image:
        "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
    },
  ];

  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (image) => {
    dispatch(addCartItem(image));
    console.log("addToCart", image);
    setCartCount(cartCount);
  };

  const moveAllCart = () => {
    dispatch(moveAllToCart(images));
    console.log("moveAllToCart", images);
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex items-center w-[89%] ml-auto justify-between mb-14 mt-20 ">
        
        <div className="text-2xl font-semi-bold">
          Total Products ({images.length})
        </div>
        <button
          className=" px-16 py-4 mr-10 text-lg font-semi-bold border border-black border-opacity-[0.5] rounded-md"
          onClick={() => moveAllCart(images)}

        >
          Move All to Cart
        </button>
      </div>
      <div className="w-4/5 m-auto">
        <div className="flex flex-wrap w-full justify-center gap-3.5">
          {images.map((image, index) => (
            <div key={index} className="mx-2 mb-20 relative">
              <img
                className="bg-[#F5F5F5] py-20 px-24 rounded-md"
                src={image.image}
                alt={image.alt}
              />
              <div className="pt-6 text-lg font-semibold">
                <h1>{image.title}</h1>
                <div className="flex gap-5 font-medium">
                  newPrice<h1 className="text-[#DB4444]">${image.newPrice}</h1>
                  <h1 className="line-through text-[#000000] text-opacity-[0.5]">
                    ${image.oldPrice}
                  </h1>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 text-white rounded-lg bg-[#DB4444]">
                {image.discountInPercentage}%
              </div>

              <div className="absolute bottom-16 w-full">
                <div className="flex items-center gap-2 bg-black justify-center h-12 rounded-b-md">
                  <SVG
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    pathName="Cart1"
                    pathName2="Cart2"
                    pathName3="Cart3"
                    pathName4="Cart4"
                    strokeColor="white"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                  <button
                    className="text-white"
                    onClick={() => addToCart(image)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
