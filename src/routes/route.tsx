import { createBrowserRouter } from "react-router-dom";

import {
  CareerOptionsPage,
  DirectionPage,
  HomePage,
  ResultPage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/direction",
    element: <DirectionPage />,
  },
  {
    path: "/career",
    element: <CareerOptionsPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);
