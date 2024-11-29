import { Link } from "react-router-dom";
import styles from "./ProfessionsLink.module.scss";
import { Button } from "../../UI";

interface IProfessionsLink {
  title: string;
  imgPath: string;
  urlPath: string;
}

export const ProfessionsLink: React.FC<IProfessionsLink> = (props) => {
  const { imgPath, title, urlPath } = props;

  return (
    <Link to={`/career/${urlPath}`} className={styles["card"]}>
      <img
        src={imgPath}
        className={styles["img"]}
        alt={`Изображение ${title}`}
      />
      <div className={styles["overlay"]}>
        <div className={styles["wrapper"]}>
          <h3 className={styles["title"]}>{title}</h3>
          <div className={styles["arc"]} />
        </div>
        <Button variant="outline" size="md">
          Перейти к тесту
        </Button>
      </div>
    </Link>
  );
};
