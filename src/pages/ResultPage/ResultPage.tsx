import { Footer } from "../../components";
import { specializations } from "../../data/specializations";
import { useAnswerCount } from "../../hooks";
import { ISpecializations } from "../../types/types";
import styles from "./ResultPage.module.scss";

export const ResultPage: React.FC = () => {
  const { answerCounts } = useAnswerCount();
  // const arr = Object.entries(answerCounts);
  const arr: [keyof ISpecializations, number][] = [
    ["copywriter", 432323],
    ["graphicDesigner", 8],
    ["journalist", 8222],
    ["editor", 112],
    ["linguist", 16],
  ];

  const currentSpecialization = arr.sort((a, b) => a[1] - b[1]).pop();

  if (currentSpecialization) {
    const currentSpecializationsKey = currentSpecialization[0];
    const specialization = specializations[currentSpecializationsKey];
    console.log(specialization);
    return (
      <>
        <section className={styles["container"]}>
          <article className={styles["item"]}>
            <div className={styles["item__left"]}>
              <img
                className={styles["item__img"]}
                src={`http://localhost:3000/images/${specialization.imgPath}`}
              />
              <p className={styles["item__text"]}>{specialization.label}</p>
            </div>
            <div className={styles["item__right"]}>
              <p className={styles["item__description"]}>
                {specialization.description}
              </p>
            </div>
          </article>

          <ul className={styles["department__list"]}>
            {specialization.universities.map((university) => (
              <li className={styles["department__item"]} key={university.id}>
                <article className={styles["department__wrapper"]}>
                  <div className={styles["department__img"]} />
                  <h2 className={styles["department__title"]}>
                    {university.name}
                  </h2>
                </article>
                <a
                  className={styles["department__link"]}
                  href={university.link}
                  target="_blank"
                >
                  {university.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <Footer />
      </>
    );
  } else {
    console.log("No specializations found.");
  }
};
