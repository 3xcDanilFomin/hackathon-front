import { PropsWithChildren } from "react";

import styles from "./Card.module.scss";

interface ICard extends PropsWithChildren {
  direction: "row" | "column";
}

export const Card: React.FC<ICard> = ({ direction, children }) => {
  const directionClassName = {
    row: "row",
    column: "column",
  }[direction];

  return (
    <article className={[styles["card"], styles[directionClassName]].join(" ")}>
      {children}
    </article>
  );
};
