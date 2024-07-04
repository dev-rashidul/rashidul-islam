import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import Promki from "../components/pages/Portfolio/Promki/Promki";
import SoutherConstruction from "../components/pages/Portfolio/SoutherConstruction/SoutherConstruction";
import Techinsight from "../components/pages/Portfolio/Techinsight/Techinsight";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/techinsight",
        element: <Techinsight></Techinsight>,
      },
      {
        path: "/souther-construction",
        element: <SoutherConstruction></SoutherConstruction>,
      },
      {
        path: "/promki",
        element: <Promki></Promki>,
      },
    ],
  },
]);

export default routes;
