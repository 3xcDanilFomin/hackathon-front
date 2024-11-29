import { IQuestion } from "../../../types/types";
import { QuestionsItem } from "../QuestionsItem/QuestionsItem";
import styles from "./QuestionsList.module.scss";

interface IQuestionsListProps {
  currentQuestions: IQuestion[];
  handleQuestionClick: () => void;
}

export const QuestionsList: React.FC<IQuestionsListProps> = (props) => {
  const { handleQuestionClick, currentQuestions } = props;
  return (
    <ul className={styles["list"]}>
      {currentQuestions.map((question) => (
        <QuestionsItem
          key={question.id}
          question={question.text}
          onClick={handleQuestionClick}
        />
      ))}
    </ul>
  );
};
