import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"
import RootLayout from './Pages/RootLayout'
import Categories from './Pages/Categories'
import Assets from './Pages/Assets'
import ErrorPage from './Pages/ErrorPage'


const router = createBrowserRouter([
  {path:'/', element:<Login/>},
  {path:'/login', element:<Login/>},
  {path:'/signup', element:<SignUp/>},
  
  {
    path: "/home",
    element: <RootLayout />,
     errorElement:<ErrorPage/>,
    children: [
       { index:true, element:<Home/> },
      {  path: "/home/categories", element: <Categories /> },
      {  path: "/home/categories/assets", element: <Assets/>  },
      {  path: "/home/categories/assets/:id", element: <Assets/>  },
      
    ],
  },
]);

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
