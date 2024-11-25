import styles from "./DirectionItem.module.scss";

interface IDirectinItem {
  imgPath: string;
  title: string;
  description: string;
}

export const DirectinItem: React.FC<IDirectinItem> = (props) => {
  const { description, title, imgPath } = props;
  return (
    <li>
      <article className={styles["item"]}>
        <div className={styles["item__left"]}>
          <img
            className={styles["item__img"]}
            src={imgPath}
            alt={`Изображение ${title}`}
          />
          <p className={styles["item__text"]}>{title}</p>
        </div>
        <div className={styles["item__right"]}>
          <p className={styles["item__description"]}>{description}</p>
        </div>
      </article>
    </li>
  );
};
