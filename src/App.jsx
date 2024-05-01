import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"contacts",
        element:<Contact/>
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
