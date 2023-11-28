import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsByCategory from "../Features/Products/ProductsByCategory/ProductsByCategory.Layout";
import MyCart from "../Features/Cart/Cart.Layout";
import SearchProduct from "../Features/SearchProduct/SearchProduct.Layout";
import MyProducts from "../Features/Products/GetAllProducts/GetAllProducts.Layout";
import GetProductDetails from "../Features/Products/GetProductDetails/GetProductDetails.Layout";
import Signing from "../Components/Signing/Signing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signing />,
  },
  {
    path: "/HomePage",
    element: <MyProducts />,
  },

  {
    path: "/:id",
    element: <GetProductDetails />,
  },
  {
    path: "/category",
    element: <ProductsByCategory />,
  },
  {
    path: "/cart",
    element: <MyCart />,
  },
  {
    path: "/search",
    element: <SearchProduct />,
  },
]);

const NavigationView = () => {
  return <RouterProvider router={router} />;
};

export default NavigationView;
