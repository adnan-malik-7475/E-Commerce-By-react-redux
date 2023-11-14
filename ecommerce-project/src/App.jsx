import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]); 

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
