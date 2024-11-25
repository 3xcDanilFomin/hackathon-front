import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  return (
    <section className={styles["sct__hello"]}>
      <article className={styles["art__hello"]}>
        <h1 className={styles["title"]}>Добро пожаловать!</h1>
        <p className={styles["text__hello"]}>
          Пройдите тест, чтобы узнать к чему у вас есть предположенность
        </p>
        <Link to="/direction" className={styles["btn__start"]}>Начать</Link>
      </article>
    </section>
  );
};
