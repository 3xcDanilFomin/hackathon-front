import { useNavigate } from "react-router-dom";

import styles from "./GoBack.module.scss";

export const GoBack: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/professions");
  };
  
  return (
    <button className={styles["back"]} onClick={handleButtonClick}>
      <svg
        className={styles["icon"]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" />
      </svg>
    </button>
  );
};
