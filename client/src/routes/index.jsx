import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddDataPage from "../pages/AddDataPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: '/add',
        element: <AddDataPage/>
      },
      {
        path: '/edit/:id',
        element: <EditProductPage/>
      },
      {
        path: '/detail/:id',
        element: <ProductDetail/>
      }
    ],
  },
]);

export default router;
