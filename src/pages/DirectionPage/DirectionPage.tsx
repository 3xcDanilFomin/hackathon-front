import { Link } from "react-router-dom";

import { DirectinList } from "../../components";
import style from "./DirectionPage.module.scss";

interface IDirection {
  id: number;
  title: string;
  imgPath: string;
  urlPath: string;
}

const directions: IDirection[] = [
  {
    id: 1,
    title: 'Тип "человек-знаковая система"',
    imgPath: "/1.jpg",
    urlPath: "/career",
  },
  {
    id: 2,
    title: 'Тип "человек-художественный образ"',
    imgPath: "/2.jpg",
    urlPath: "/career",
  },
  {
    id: 3,
    title: 'Тип "человек-человек"',
    imgPath: "/3.jpg",
    urlPath: "/career",
  },
  {
    id: 4,
    title: 'Тип "человек-техника"',
    imgPath: "/4.jpg",
    urlPath: "/career",
  },
  {
    id: 5,
    title: 'Тип "человек-природа"',
    imgPath: "/5.jpg",
    urlPath: "/career",
  },
];

export const DirectionPage: React.FC = () => {
  return (
    <main className={style["container"]}>
      <DirectinList />
      <section className={style["section"]}>
        <h1 className={style["title"]}>Выберите понравившееся направление</h1>
        <ul className={style["list"]}>
          {directions.map((direction) => (
            <li className={style["item"]} key={direction.id}>
              <article className={style["item__wrapper"]}>
                <img
                  className={style["item__img"]}
                  src={direction.imgPath}
                  alt={`Изображение ${direction.title}`}
                />
                <h2 className={style["item__title"]}>{direction.title}</h2>
              </article>
              <Link className={style["item__link"]} to={direction.urlPath} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
