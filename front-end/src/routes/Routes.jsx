import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { RootLayout } from "../layout/RootLayout";
import { About } from "../pages/About";
import { LoginPage } from "../pages/LoginPage";
import { Signuppage } from "../pages/signuppage";
import { ProductPage } from "../pages/productPage";
import { ProductDetails } from "../pages/productDetails";
import { UserLayout } from "../layout/UserLayout";
import { AuthUser } from "./protectedRoutes/AuthUser";
import { ProfilePage } from "../pages/user/ProfilePage";

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
          path:"product-details/:id",
          element:<ProductDetails/>,
        },
      ]
    },
    {
      path:"user",
      element: (
      <AuthUser>
        {""}
      <UserLayout/>
      </AuthUser>
      ),
      children:[
        {
          path:'profile',
          element: <ProfilePage/>
        },
        {
          path:"cart",
          element:<h2>my cart</h2>
        }
      ]
    },
    {
      path:"admin-signup",
      element: <h2>admin signup</h2>
    },
  ]);