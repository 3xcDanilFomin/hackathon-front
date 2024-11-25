import { RouterProvider } from "react-router-dom";

import { router } from "../../routes/route";

export const Provider: React.FC = () => {
  return <RouterProvider router={router} />;
};
