import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Brand from "../pages/brand/Brand";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/brand',
            element : <Brand></Brand>
        }
    ]
  },
]);

export default router;
