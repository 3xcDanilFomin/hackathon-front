import { Header, QuestionsList } from "../../components";
import { Subtitle } from "../../components/UI";
import { questions } from "../../data/questions";
import { useQuestions } from "../../hooks";
import style from "./CareerOptionsPage.module.scss";

export const CareerOptionsPage: React.FC = () => {
  const { displayedQuestions, questionIndex, handleQuestionClick } =
    useQuestions(questions);

  console.log({ displayedQuestions, questionIndex });
  return (
    <>
      <Header counter={questionIndex} total={questions.length / 2} />
      <section className={style["container"]}>
        <Subtitle>Выберите вариант, который для вас ближе</Subtitle>
        <QuestionsList
          currentQuestions={displayedQuestions.questionsToDisplay}
          handleQuestionClick={handleQuestionClick}
        />
      </section>
    </>
  );
};
