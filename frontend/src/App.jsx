import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import { Jobs } from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDiscription from "./components/JobDiscription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path:"/jobs",
    element: <Jobs/>
  },
  {
    path:"/discription/:id",
    element: <JobDiscription/>
  },
  {
    path:"/browse",
    element: <Browse/>
  },
  {
    path:"/profile",
    element: <Profile/>
  },

  //admin ke liye
  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CompanyCreate/>
  },
  {
    path:"/admin/companies/:id",
    element:<CompanyCreate/>
  }

]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;