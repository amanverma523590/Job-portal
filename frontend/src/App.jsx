import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import { Jobs } from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDiscription from "./components/JobDiscription";


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
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;