import React from "react";
import Navbar from "../components/Navbar";
import SVG from "../components/SVG";


function Product() {



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
  




  return (
    <div>
      <Navbar />
      <hr />

      <div className="w-4/5 m-auto">
        <div className="flex flex-wrap w-full justify-center ">
          {images.map((image, index) => (
            <div key={index} className="mx-2 my-2 relative">
              <img
                className="bg-gray-200 py-20 px-24 rounded-md"
                src={image.image}
                alt={image.alt}
              />
              <div className="pt-6 text-lg">
                <h1>{image.title}</h1>
                <div className="flex gap-5">
                  <h1 className="text-rose-600">{image.newPrice}</h1>
                  <h1 className="line-through text-gray-400">{image.oldPrice}</h1>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 text-white rounded-lg bg-rose-600">
                {image.discountInPercentage}%
              </div>
              <div className="absolute top-2 right-3 bg-white rounded-full p-1">
                <SVG
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  pathName="Wishlist"
                  strokeColor="black"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
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
                  <button className="text-white">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Product;
