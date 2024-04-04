import { createBrowserRouter } from "react-router-dom";
import MainLayaout from "../Layout/MainLayaout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import DonationDetails from "../Pages/DonationDetails";
import NotFound from "../Pages/NotFound";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayaout></MainLayaout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

export default myCreateRouter;
