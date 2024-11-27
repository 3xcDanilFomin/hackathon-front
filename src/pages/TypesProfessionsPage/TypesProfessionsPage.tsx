import { ProfessionsLink, TypesProfessionsList } from "../../components";
import { Subtitle, Title } from "../../components/UI";
import styles from "./TypesProfessionsPage.module.scss";

interface IDirection {
  id: number;
  title: string;
  imgPath: string;
  urlPath: string;
}

const directions: IDirection[] = [
  {
    id: 1,
    title: "Человек-знаковая система",
    imgPath: "/1.jpg",
    urlPath: "/career",
  },
  {
    id: 2,
    title: "Человек-художественный образ",
    imgPath: "/2.jpg",
    urlPath: "/career",
  },
  {
    id: 3,
    title: "Человек-человек",
    imgPath: "/3.jpg",
    urlPath: "/career",
  },
  {
    id: 4,
    title: "Человек-техника",
    imgPath: "/4.jpg",
    urlPath: "/career",
  },
  {
    id: 5,
    title: "Человек-природа",
    imgPath: "/5.jpg",
    urlPath: "/career",
  },
];

export const TypesProfessionsPage: React.FC = () => {
  return (
    <div className={styles["wrapper"]}>
      <section className={styles["section"]}>
        <Title>Виды типов проффесий</Title>
        <TypesProfessionsList />
      </section>
      <section className={styles["section"]}>
        <Subtitle>Выберите понравившееся направление</Subtitle>
        <ul className={styles["list"]}>
          {directions.map((direction) => (
            <li key={direction.id}>
              <ProfessionsLink
                title={direction.title}
                imgPath={direction.imgPath}
                urlPath={direction.urlPath}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
