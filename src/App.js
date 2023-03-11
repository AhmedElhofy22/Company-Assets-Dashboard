import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"

const router = createBrowserRouter([
  {path:'/', element:<Login/>},
  {path:'/login', element:<Login/>},
  {path:'/signup', element:<SignUp/>},
  {path:'/home', element:<Home/>},
]);

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
