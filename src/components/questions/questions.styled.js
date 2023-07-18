import styled from "styled-components";

export const StyledQuestions = styled.section``;

export const StyledQuestionsCancel = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  right: 4rem;
  top: 2rem;
`;

export const StyledQuestionNav = styled.div``;

export const StyledQuestionResult = styled.h2``;
