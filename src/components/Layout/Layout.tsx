import { Outlet } from "react-router-dom";


import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.scss";

export const Layout: React.FC = () => {
  return (
    <main className={styles["layout"]}>
      <Outlet/>
      <Footer />
    </main>
  );
};
