import {
  StyledQuestionItem,
  StyledQuestionOption,
  StyledQuestionOptions,
} from "./question-item.styled";

const QuestionItem = ({ currentQuestion, setSelectedValue, moveNext }) => {
  const { question, options } = currentQuestion;

  const setSelectedHandler = (value, isRejection) => {
    setSelectedValue(value, isRejection);
    moveNext();
  };

  return (
    <StyledQuestionItem>
      <h1>{question}</h1>
      <StyledQuestionOptions>
        {options.map((option) => {
          console.log(option.value === currentQuestion.selected.value);
          return (
            <StyledQuestionOption
              key={option.value}
              selected={option.value === currentQuestion.selected.value}
              onClick={() =>
                setSelectedHandler(option.value, option.isRejection)
              }
              dangerouslySetInnerHTML={{ _html: option.display }}
            />
          );
        })}
      </StyledQuestionOptions>
    </StyledQuestionItem>
  );
};

export default QuestionItem;
