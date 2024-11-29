import { Link } from "react-router-dom";

import { Button } from "../../components/UI";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  return (
    <section className={styles["section"]}>
      <h1 className={styles["title"]}>Добро пожаловать!</h1>
      <p className={styles["subtitle"]}>
        Пройдите тест,<br className={styles["transfer"]} /> чтобы узнать к чему
        <br /> у вас есть предрасположенность
      </p>
      <Link to="/professions">
        <Button variant="default" size="lg">
          Начать
        </Button>
      </Link>
    </section>
  );
};
