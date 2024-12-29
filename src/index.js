import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop'
import WhyShopPage from './pages/WhyShopPage';
import Contact from './pages/Contact';
import AllProducts from './pages/AllProducts';
import ViewProduct from './pages/ViewProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "shop", element: <Shop />},
      {path: "why-us", element: <WhyShopPage />},
      {path: "contact-us", element: <Contact />},
      {path: "all-products", element: <AllProducts />},
      {path: "product/:productId", element: <ViewProduct />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
