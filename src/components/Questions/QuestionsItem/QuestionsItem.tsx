import styles from "./QuestionsItem.module.scss";

interface IQuestionsItem {
  question: string;
  onClick: () => void;
}

export const QuestionsItem: React.FC<IQuestionsItem> = (props) => {
  const { question, onClick } = props;
  return (
    <li className={styles["item"]} onClick={onClick}>
      <div className={styles["box"]}>
        <h3 className={styles["question"]}>{question}</h3>
      </div>
    </li>
  );
};
