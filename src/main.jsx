import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainComponentP from "./COMPONENTS/MainComponentP.jsx";
import DetailsP from "./COMPONENTS/DETAILS/DetailsP";
import { Provider } from "react-redux";
import { store } from "./REDUUX SETUP/store";
import CategoryPage from "./COMPONENTS/CATEGORY/CategoryPage";
import CartP from "./CART/CartP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponentP />,
  },
  {
    path: "/:id",
    element: <DetailsP />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/cart",
    element: <CartP />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
