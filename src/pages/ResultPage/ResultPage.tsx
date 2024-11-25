import { Footer } from "../../components";
import styles from "./ResultPage.module.scss";

export const ResultPage: React.FC = () => {
  return (
    <>
      <section className={styles["container"]}>
        <article className={styles["item"]}>
          <div className={styles["item__left"]}>
            <div className={styles["item__img"]} />
            <p className={styles["item__text"]}>
              Название выигранного направления
            </p>
          </div>
          <div className={styles["item__right"]}>
            <p className={styles["item__description"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
              mollitia laboriosam iure doloremque tenetur quas quidem hic vitae
              et porro distinctio, consectetur vel aut soluta voluptas.
              Consectetur ratione vel laudantium? Consequuntur architecto rem
              ipsa non nobis aperiam, exercitationem iusto error, eius, quo
              corporis fuga? Molestias voluptas totam voluptatem quae commodi
              veritatis exercitationem facilis, nisi fugiat non tempore itaque
              cupiditate quam. Veritatis libero, accusamus voluptates
              exercitationem esse qui quaerat asperiores cum eum neque? Nulla,
              voluptatum dicta magnam quas, repellendus eius doloremque
              laudantium necessitatibus id ea voluptas laborum. Necessitatibus
              magni in velit? Ullam, minus quam. Voluptate neque labore delectus
              iusto cum, numquam ad dolorem ipsum dolores beatae eius temporibus
              ipsa molestias dolore doloremque facere dicta pariatur
              exercitationem accusamus eveniet alias atque doloribus. Tempore
              qui voluptatibus ab est aut obcaecati aperiam quis quam recusandae
              esse unde aliquid tenetur minima sed placeat itaque praesentium,
              nesciunt, perspiciatis suscipit officia ex! Quos, eaque hic.
              Porro, praesentium.
            </p>
          </div>
        </article>

        <ul className={styles["department__list"]}>
          {new Array(5).fill(0).map((_, index) => (
            <li className={styles["department__item"]} key={index}>
              <article className={styles["department__wrapper"]}>
                <div className={styles["department__img"]} />
                <h2 className={styles["department__title"]}>Название вуза </h2>
              </article>
              <a className={styles["department__link"]} href="#!">
                Ссылка на вуз
              </a>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
};
