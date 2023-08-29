import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Navbar from "../pages/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/product",
        element: <Product />
    },
    // CANVAS
    {
        path: "/nav-dev",
        element: <Navbar />
    },
]);

export default router;