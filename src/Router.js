import { createBrowserRouter } from "react-router-dom";

import ProductList from "./components/Product-list";
import Home from "./components/Home";
import RouteLayout from "./components/root.layout";
import FourOFour from "./components/FourOFour";
import NewProduct from "./components/New-product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout/>,
    // errorElement: <FourOFour/>,
    children: [
      { path: "/products", element: <ProductList /> },
      { path: "/", element: <Home /> },
      { path: "/new-product", element: <NewProduct /> },
    ],
  },
]);

export default router;
