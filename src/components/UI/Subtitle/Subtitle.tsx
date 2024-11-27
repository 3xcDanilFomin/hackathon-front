import { PropsWithChildren } from "react";

import styles from "./Subtitle.module.scss";

export const Subtitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2 className={styles["subtitle"]}>{children}</h2>;
};
