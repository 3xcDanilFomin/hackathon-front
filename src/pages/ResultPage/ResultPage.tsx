import { UniversitiesList } from "../../components";
import { specializations } from "../../data/specializations";
import { useAnswerCount } from "../../hooks";
import { ISpecializations } from "../../types/types";
import styles from "./ResultPage.module.scss";

export const ResultPage: React.FC = () => {
  const tg = window.Telegram.WebApp;
  tg.MainButton.show();
  const { answerCounts } = useAnswerCount();
  const arr = Object.entries(answerCounts);
  const currentSpecialization = arr.sort((a, b) => a[1] - b[1]).pop();

  if (currentSpecialization) {
    const currentSpecializationsKey = currentSpecialization[0];
    const specialization =
      specializations[currentSpecializationsKey as keyof ISpecializations];
    return (
      <>
        <section className={styles["container"]}>
          <div className={styles["top"]}>
            <div className={styles["wrapper"]}>
              <h1 className={styles["title"]}>{specialization.label}</h1>
              <img
                className={styles["img"]}
                src={`http://localhost:3000/images/${specialization.imgPath}`}
                alt={`Изображение ${specialization.name}`}
              />
            </div>
            <div className={styles["wrapper-r"]}>
              <p
                className={styles["description"]}
                style={{ textAlign: "center", fontSize: "22px" }}
              >
                Поздравляем! Вы завершили профориентационный тест!
              </p>
              <p className={styles["description"]}>
                Спасибо, что уделили время для прохождения нашего теста. Мы
                надеемся, что этот опыт помог вам лучше понять свои сильные
                стороны и интересы.
              </p>
              <p className={styles["description"]}>
                На основе ваших ответов, мы рекомендуем обратить внимание на
                следующую профессию:
              </p>
              <p className={styles["description"]}>
                {specialization.description}
              </p>
              <p className={styles["description"]}>
                Не забывайте, что выбор профессии – это важный шаг. Исследуйте
                возможности, которые открываются перед вами, и не бойтесь
                мечтать! Удачи в вашем карьерном пути!
              </p>
            </div>
          </div>
          <UniversitiesList universities={specialization.universities} />
        </section>
      </>
    );
  } else {
    console.log("Нет специализаций.");
  }
};
