import styles from "./QuestionsItem.module.scss";

interface IQuestionsItem {
  imgPath: string;
  question: string;
  onClick: () => void;
}

export const QuestionsItem: React.FC<IQuestionsItem> = (props) => {
  const { imgPath, question, onClick } = props;
  return (
    <li className={styles["item"]} onClick={onClick}>
      <div className={styles["box"]}>
        <img className={styles["img"]} src={imgPath} alt="" />
        <h3 className={styles["question"]}>{question}</h3>
      </div>
    </li>
  );
};
