import { Card } from "../../UI";
import styles from "./TypesProfessionsItem.module.scss";

interface ITypesProfessionsItem {
  imgPath: string;
  title: string;
  description: string;
}

export const TypesProfessionsItem: React.FC<ITypesProfessionsItem> = (props) => {
  const { description, title, imgPath } = props;
  return (
    <li className={styles["item"]}>
      <Card direction="column">
        <div className={styles["wrapper"]}>
          <img
            className={styles["img"]}
            src={imgPath}
            alt={`Изображение ${title}`}
          />
          <p className={styles["text"]}>{title}</p>
        </div>
        <p className={styles["description"]}>{description}</p>
      </Card>
    </li>
  );
};
