import { useRef, useState } from "react";

export const useTestForm = (questionsLength: number) => {
  const [selectedQuestions, setSelectedQuestions] = useState<boolean[]>(
    Array(questionsLength).fill(false)
  );
  const [noneInterestSelected, setNoneInterestSelected] =
    useState<boolean>(false);
  const noneInterestCheckboxRef = useRef<HTMLInputElement | null>(null);

  const toggleQuestionSelection = (index: number) => {
    if (
      noneInterestCheckboxRef.current &&
      noneInterestCheckboxRef.current.checked
    ) {
      noneInterestCheckboxRef.current.checked = false;
      setNoneInterestSelected(false);
    }
    setSelectedQuestions((prevSelected) => {
      const updatedSelection = [...prevSelected];
      updatedSelection[index] = !updatedSelection[index];
      return updatedSelection;
    });
  };

  const handleNoneInterestChange = () => {
    setNoneInterestSelected((prev) => !prev);
    setSelectedQuestions(Array(questionsLength).fill(false));
  };

  const resetNoneInterestCheckbox = () => {
    if (noneInterestCheckboxRef.current) {
      noneInterestCheckboxRef.current.checked = false;
      setNoneInterestSelected(false);
    }
  };

  const isAnyQuestionSelected = selectedQuestions.some((selected) => selected);
  const isButtonActive = isAnyQuestionSelected || noneInterestSelected;

  return {
    selectedQuestions,
    toggleQuestionSelection,
    handleNoneInterestChange,
    resetNoneInterestCheckbox,
    noneInterestCheckboxRef,
    isButtonActive,
  };
};
