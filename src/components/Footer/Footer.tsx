import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["text"]}>
        {/* Разработано командой <span style={{fontWeight: 600}}>DeathCode</span> */}
      </p>
    </footer>
  );
};
