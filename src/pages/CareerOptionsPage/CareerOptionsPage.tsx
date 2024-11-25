import { Link } from "react-router-dom";

import style from "./CareerOptionsPage.module.scss";

export const CareerOptionsPage: React.FC = () => {
  return (
    <section className={style["container"]}>
      <h1 className={style["title"]}>Чем бы вы хотели заниматься?</h1>
      <ul className={style["list"]}>
        {new Array(2).fill(0).map((_, index) => (
          <li className={style["item"]} key={index}>
            <article className={style["wrapper"]}>
              {/* <img src="" alt="" /> */}
              <div className={style["img"]} />
              <h2 className={style["subtitle"]}>Название одного направления</h2>
            </article>
            <Link className={style["link"]} to="/result" />
          </li>
        ))}
      </ul>
    </section>
  );
};
