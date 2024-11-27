import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IQuestion } from "../data/questions";

export const useQuestions = (questions: IQuestion[]) => {
  const [questionIndex, setQuestionIndex] = useState(1);
  const [displayedQuestions, setDisplayedQuestions] = useState({
    currentIndex: 0,
    questionsToDisplay: questions.slice(0, 2),
  });
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    setQuestionIndex((prevIndex) => ++prevIndex);
    setDisplayedQuestions((prevState) => {
      const nextIndex = prevState.currentIndex + 2;
      return {
        currentIndex: nextIndex,
        questionsToDisplay: questions.slice(nextIndex, nextIndex + 2),
      };
    });
  };

  useEffect(() => {
    if (questionIndex > questions.length / 2) {
      console.log(questionIndex);
      navigate("/result");
    }
  }, [questionIndex, questions, navigate]);

  return {
    displayedQuestions,
    handleQuestionClick,
    questionIndex,
  };
};
