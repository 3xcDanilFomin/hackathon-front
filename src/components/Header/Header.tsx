import { GoBack, QuestionProgress } from "../UI";
import styles from "./Header.module.scss";

interface IHeaderProps {
  counter: number;
  total: number;
}

export const Header: React.FC<IHeaderProps> = ({ counter, total }) => {
  return (
    <header className={styles["header"]}>
      <QuestionProgress counter={counter} total={total} />
      <GoBack />
    </header>
  );
};
