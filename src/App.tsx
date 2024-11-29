import { useEffect } from "react";
import { Provider } from "./components";
import "./styles/main.scss";

export const App: React.FC = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.disableVerticalSwipes();
    }
  }, []);
  return (
    <>
      <Provider />
    </>
  );
};
