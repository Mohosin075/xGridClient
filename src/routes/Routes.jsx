import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Brand from "../pages/brand/Brand";
import Sales from "../pages/sales/Sales";
import Rentals from "../pages/rentals/Rentals";
import Financing from "../pages/financing/Financing";
import News from "../pages/news/News";
import Contact from "../pages/contact/Contact";
import Gallery from "../pages/gallery/Gallery";
import InventoryDetails from "../components/inventoryDetails/InventoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Sales",
        element: <Sales></Sales>,
      },
      {
        path: "/inventory/:id",
        element: <InventoryDetails></InventoryDetails>,
      },
      {
        path: "/search",
        element: <Sales></Sales>,
      },
      {
        path: "/Rentals",
        element: <Rentals></Rentals>,
      },
      {
        path: "/Brands",
        element: <Brand></Brand>,
      },
      {
        path: "/Financing",
        element: <Financing></Financing>,
      },
      {
        path: "/News",
        element: <News></News>,
      },
      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
