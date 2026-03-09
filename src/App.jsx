

import { createBrowserRouter , RouterProvider } from "react-router-dom"

import LoginPage from "./components/LoginPage.jsx"
import Signupform from "./components/SignPage.jsx"
import PORTFLIOPORJECT from "./components/portflio.jsx";


const router = createBrowserRouter([
  {
    path:'/',
    element: <Signupform/>
  },
  { 
    path:'/loginpage',
    element:<LoginPage/>,
  },
  {
    path:"/Portflio",
    element:<PORTFLIOPORJECT/>
  }
])

export default function MYPROJECT(){

return(
  <div>
    <RouterProvider router = { router } />
  </div>
);
}
