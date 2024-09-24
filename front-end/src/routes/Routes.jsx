import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { RootLayout } from "../layout/RootLayout";
import { About } from "../pages/About";
import { LoginPage } from "../pages/LoginPage";
import { Signuppage } from "../pages/signuppage";
import { ProductPage } from "../pages/productPage";
import { ProductDetails } from "../pages/productDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children:[
        {
          path:'',
          element: <Home/>,
        },
        {
          path:'about',
          element:<About/>,
        },
        {
          path:'login',
          element:<LoginPage/>,
        },
        {
          path:'signup',
          element:<Signuppage/>,
        },
        {
          path:'product',
          element:<ProductPage/>,
        },
        {
          path:"product-details",
          element:<ProductDetails/>,
        },
      ]
    },
  ]);