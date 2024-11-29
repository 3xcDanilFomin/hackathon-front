import { professionLinks } from "../../../data/profession";
import { ProfessionsLink } from "../ProfessionsLink/ProfessionsLink";
import styles from "./ProfessionsList.module.scss";

export const ProfessionsList = () => {
  return (
    <ul className={styles["list"]}>
      {professionLinks.map((profession) => (
        <li key={profession.id}>
          <ProfessionsLink
            title={profession.title}
            imgPath={profession.imgPath}
            urlPath={profession.urlPath}
          />
        </li>
      ))}
    </ul>
  );
};
