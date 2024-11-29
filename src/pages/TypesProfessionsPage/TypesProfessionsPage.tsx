import { ProfessionsList, TypesProfessionsList } from "../../components";
import { Subtitle, Title } from "../../components/UI";
import styles from "./TypesProfessionsPage.module.scss";

export const TypesProfessionsPage: React.FC = () => {
  return (
    <div className={styles["wrapper"]}>
      <section className={styles["section"]}>
        <Title>Существующие типы профессий</Title>
        <TypesProfessionsList />
      </section>
      <section className={styles["section"]}>
        <Subtitle>Выберите понравившееся направление</Subtitle>
        <ProfessionsList />
      </section>
    </div>
  );
};
