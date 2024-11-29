import { useContext } from "react";
import { AnswerCountContext } from "../context/AnswerCountContext"; // Импортируйте контекст

export const useAnswerCount = () => {
  const context = useContext(AnswerCountContext);
  if (!context) {
    throw new Error(
      "useAnswerCount must be used within an AnswerCountProvider"
    );
  }
  return context;
};
