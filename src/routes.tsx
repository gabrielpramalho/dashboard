import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { Clients } from "./pages/app/clients";
import { Products } from "./pages/app/products";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Clients /> },
      { path: '/products', element: <Products /> }
    ],
  },
])