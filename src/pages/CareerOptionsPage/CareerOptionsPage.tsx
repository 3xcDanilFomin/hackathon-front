import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Header, TestForm } from "../../components";
import { Subtitle } from "../../components/UI";
import { useQuestions } from "../../hooks";
import style from "./CareerOptionsPage.module.scss";

export const CareerOptionsPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { questionState, totalNumberQuestions, handleQuestionSubmission } =
    useQuestions(name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={style["container"]}>
        <Header
          counter={questionState.numberCurrentQuestion}
          total={totalNumberQuestions}
        />
        <Subtitle>Выберите вариант, который для вас ближе</Subtitle>
        <TestForm
          questions={questionState.displayedQuestions}
          onClickQuestion={handleQuestionSubmission}
        />
      </section>
    </>
  );
};
