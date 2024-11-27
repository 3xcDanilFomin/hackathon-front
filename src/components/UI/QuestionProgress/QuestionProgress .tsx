import styles from "./QuestionProgress.module.scss";

interface IQuestionProgressProps {
  counter: number;
  total: number;
}

export const QuestionProgress: React.FC<IQuestionProgressProps> = ({
  counter,
  total,
}) => {
  return (
    <p className={styles["progress"]}>
      <span className={styles["current"]}>{counter}</span>/
      <span className={styles["total"]}>{total}</span>
    </p>
  );
};
