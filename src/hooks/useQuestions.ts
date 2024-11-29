import { useState } from "react";
import { test } from "../data/test";
import { IQuestion, ITest } from "../types/types";
import { useNavigate } from "react-router-dom";
import { shuffle } from "../helpers";

export const useQuestions = (path: string | undefined) => {
  const navigate = useNavigate();

  const formattedKey: keyof ITest | undefined = path
    ? (path.split("-").reduce((accumulator, part, index) => {
        return index === 0
          ? accumulator + part
          : accumulator + part.charAt(0).toUpperCase() + part.slice(1);
      }, "") as keyof ITest)
    : undefined;

  const directionQuestions = formattedKey
    ? test[formattedKey].flatMap((direction) => direction.questions).slice(0, 10)
    : [];

  shuffle(directionQuestions);

  const totalNumberQuestions = directionQuestions.length / 2;

  const [questionState, setQuestionState] = useState<{
    numberCurrentQuestion: number;
    totalQuestionsToShow: number;
    displayedQuestions: IQuestion[];
  }>({
    numberCurrentQuestion: 1,
    totalQuestionsToShow: 2,
    displayedQuestions: directionQuestions.slice(0, 2),
  });

  const handleQuestionSubmission = () => {
    setQuestionState((previousQuestionState) => {
      const updatedTotalQuestionsCount =
        previousQuestionState.totalQuestionsToShow + 2;
      const nextCurrentQuestionIndex =
        previousQuestionState.numberCurrentQuestion + 1 <= totalNumberQuestions
          ? previousQuestionState.numberCurrentQuestion + 1
          : previousQuestionState.numberCurrentQuestion;

      if (updatedTotalQuestionsCount > directionQuestions.length) {
        navigate("/result");
      }

      return {
        ...previousQuestionState,
        numberCurrentQuestion: nextCurrentQuestionIndex,
        totalQuestionsToShow: updatedTotalQuestionsCount,
        displayedQuestions: directionQuestions.slice(
          previousQuestionState.totalQuestionsToShow,
          updatedTotalQuestionsCount
        ),
      };
    });
  };

  return {
    questionState,
    handleQuestionSubmission,
    totalNumberQuestions,
  };
};
