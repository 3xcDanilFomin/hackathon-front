import { IQuestion } from "../../types/types";
import { Button } from "../UI";
import styles from "./TestForm.module.scss";
import { useTestForm } from "../../hooks";
import { getIndicesOfTrue } from "../../helpers";
import { useAnswerCount } from "../../hooks/useAnswerCount"; // Импортируйте хук из нового файла

interface ITestForm {
  questions: IQuestion[];
  onClickQuestion: () => void;
}

export const TestForm: React.FC<ITestForm> = ({
  questions,
  onClickQuestion,
}) => {
  const {
    selectedQuestions,
    toggleQuestionSelection,
    handleNoneInterestChange,
    resetNoneInterestCheckbox,
    noneInterestCheckboxRef,
    isButtonActive,
  } = useTestForm(questions.length);

  const { incrementAnswerCount } = useAnswerCount();

  const handleSubmit = () => {
    handleNoneInterestChange();
    resetNoneInterestCheckbox();
    onClickQuestion();
    const arr: number[] = getIndicesOfTrue(selectedQuestions);

    for (let i = 0; i < arr.length; i++) {
      const question = questions[arr[i]];
      const relatedField = question.relatedField;

      incrementAnswerCount(relatedField); 
    }
  };

  return (
    <form className={styles.form}>
      <ul className={styles.list}>
        {questions.map((question, index) => (
          <li className={styles.item} key={question.id}>
            <label htmlFor={`question-${question.id}`}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={`question-${question.id}`}
                checked={selectedQuestions[index]}
                onChange={() => toggleQuestionSelection(index)}
              />
              <span>{question.text}</span>
            </label>
          </li>
        ))}
        <li className={styles.item}>
          <label htmlFor="none-interest">
            <input
              className={styles.checkbox}
              ref={noneInterestCheckboxRef}
              type="checkbox"
              id="none-interest"
              onChange={handleNoneInterestChange}
            />
            <span>Ничего не интересно.</span>
          </label>
        </li>
      </ul>
      <Button
        onClick={handleSubmit}
        style={{ alignSelf: "center" }}
        type="button"
        size="lg"
        variant="outline"
        disabled={!isButtonActive}
      >
        Ответить
      </Button>
    </form>
  );
};
