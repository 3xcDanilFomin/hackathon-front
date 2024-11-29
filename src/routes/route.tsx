import { createBrowserRouter } from "react-router-dom";

import {
  CareerOptionsPage,
  TypesProfessionsPage,
  HomePage,
  ResultPage,
} from "../pages";
import { Layout } from "../components/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/professions",
        element: <TypesProfessionsPage />,
      },
      {
        path: "/career/:name",
        element: <CareerOptionsPage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
    ],
  },
]);
