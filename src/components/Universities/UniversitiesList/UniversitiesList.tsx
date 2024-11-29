import { IUniversitie } from "../../../types/types";
import { UniversitiesItem } from "../UniversitiesItem/UniversitiesItem";
import styles from "./UniversitiesList.module.scss";

interface IUniversitiesList {
  universities: IUniversitie[];
}

export const UniversitiesList: React.FC<IUniversitiesList> = ({
  universities,
}) => {
  return (
    <section className={styles["departament"]}>
      <h2 className={styles["title"]}>
        По данному направлению обучение осуществляют следующие учебные
        заведения:
      </h2>
      <ul className={styles["list"]}>
        {universities.map((university) => (
          <UniversitiesItem
            key={university.id}
            link={university.link}
            name={university.name}
          />
        ))}
      </ul>
    </section>
  );
};
