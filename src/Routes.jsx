import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Project from "./Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/project", element: <Project></Project> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
     
    ],
  },
]);

export default router;
