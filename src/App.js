import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"
import RootLayout from './Pages/RootLayout'
import Categories from './Pages/Categories'
import Assets from './Pages/Assets'
import ErrorPage from './Pages/ErrorPage'
import Employees from "./Pages/Employees";
import AssetDetail from "./Pages/AssetDetail";
import EmployerDetail from "./Pages/EmployerDetail";
import EditAsset from "./Pages/EditAsset";
import EditEmployer from "./Pages/EditEmployer";
import CategoryDetail from "./Pages/CategoryDetail";


const router = createBrowserRouter([
  {path:'/', element:<Login/>},
  {path:'/login', element:<Login/>},
  {path:'/signup', element:<SignUp/>},
  {path:'/home', element:<Home/>},
  {
    path: "/",
    element: <RootLayout />,
     errorElement:<ErrorPage/>,
    children: [
       { index:true, element:<Home/> },
      {  path: "/categories", element: <Categories /> },
      {  path: "/categories/assets", element: <Assets/>  },
      {  path: "/categories/assets/:id", element: <AssetDetail/>  },
      {  path: "/categories/assets/:id", element: <CategoryDetail/>  },
      {  path: "/categories/assets/:id/edit", element: <EditAsset/>  },
      {  path: "/employees", element: <Employees/> },
      {  path: "/employees/:id", element: <EmployerDetail/>  },
      {  path: "/employees/:id/edit", element: <EditEmployer/>  },
    ],
  },
]);

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
