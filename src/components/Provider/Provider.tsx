import { RouterProvider } from "react-router-dom";

import { router } from "../../routes/route";
import { AnswerCountProvider } from "../../context/AnswerCountContext";

export const Provider: React.FC = () => {
  return (
    <AnswerCountProvider>
      <RouterProvider router={router} />;
    </AnswerCountProvider>
  );
};
