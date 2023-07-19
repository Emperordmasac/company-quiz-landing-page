import {
  StyledQuestionNav,
  StyledQuestionResult,
  StyledQuestions,
  StyledQuestionsCancel,
} from "./questions.styled";
import Container from "../container/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import QuestionItem from "./question-item/question-item";

const Questions = ({ toggleQuestions, questions }) => {
  console.log("data --->", questions.questions);

  questions.queestions.forEach((question) => {
    question.selected = {
      value: null,
      rejection: null,
    };
  });

  const [quest, setQuestions] = useState(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quest[currentIndex]);
  const [rejection, setRejection] = useState(null);

  const setSelectedValueHandler = (value, rejection) => {
    setQuestions((prevState) => {
      let newState;
      newState = prevState.map((question) => {
        if (question.question === currentQuestion.question) {
          let newQuestion = {
            ...question,
            selected: {
              value,
              rejection,
            },
          };

          return newQuestion;
        } else {
          return question;
        }
      });

      setCurrentQuestion(newState[currentIndex]);
      return newState;
    });
  };

  const onNextHandler = () => {
    setCurrentIndex((prevState) => {
      let nextState = prevState;
      if (prevState < questions.length - 1) {
        nextState = prevState + 1;
        setCurrentQuestion(quest[nextState]);
      }

      return nextState;
    });
  };

  const onPreviousHandler = () => {
    setCurrentIndex((prevState) => {
      let nextState = prevState;
      if (prevState > 0) {
        nextState = prevState - 1;
        setCurrentQuestion(quest[nextState]);
      }

      return nextState;
    });
  };

  const onGetResultHandler = () => {
    for (let i = 0; i < quest.length; i++) {
      let current = quest[i];
      console.log(current.selected);
      if (current.selected.rejection) {
        setRejection(true);
        return;
      }
      setRejection(false);

      return;
    }
  };

  let content;
  if (rejection === null) {
    content = (
      <>
        <QuestionItem
          currentQuestion={currentQuestion}
          setSelectedValue={setSelectedValueHandler}
          moveNext={onNextHandler}
        />
        <StyledQuestionNav>
          {currentIndex !== 0 && (
            <button onClick={onPreviousHandler}>Previous</button>
          )}

          {currentIndex === questions.length - 1 ? (
            <button onClick={onGetResultHandler}>Get Results</button>
          ) : (
            <button onClick={onNextHandler}>Next</button>
          )}
        </StyledQuestionNav>
      </>
    );
  } else if (rejection) {
    content = (
      <StyledQuestionResult>
        Unfortunately, we are unable to prescribe this medication for you. This
        is because finasteride can alter the PSA levels, which maybe used to
        monitor for cancer. You should discuss this further with your GP or
        specialist if you would still like this medication.
      </StyledQuestionResult>
    );
  } else {
    content = (
      <StyledQuestionResult>
        Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
        <a href="https://manual.com" target="__blank">
          www.manual.co
        </a>
        , and prepare to say hello to your new hair
      </StyledQuestionResult>
    );
  }
  return (
    <StyledQuestions>
      <Container>
        <StyledQuestionsCancel onClick={toggleQuestions}>
          <FontAwesomeIcon icon={faTimes} size="3x" />
        </StyledQuestionsCancel>
        {content}
      </Container>
    </StyledQuestions>
  );
};

export default Questions;
