import { typesProfessions } from "../../../data/profession";
import { TypesProfessionsItem } from "../TypesProfessionsItem/TypesProfessionsItem";
import styles from "./TypesProfessionsList.module.scss";



export const TypesProfessionsList: React.FC = () => {
  return (
    <ul className={styles["list"]}>
      {typesProfessions.map((profession) => (
        <TypesProfessionsItem
          key={profession.id}
          imgPath={profession.imgPath}
          title={profession.title}
          description={profession.description}
        />
      ))}
    </ul>
  );
};
