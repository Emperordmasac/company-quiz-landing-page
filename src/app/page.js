"use client";

import useToggle from "@/lib/use-toogle";
import styled from "styled-components";
import { Header } from "@/components";

//--custom components
const StyledBody = styled.div`
  font-family: "Montserrat";
`;

export default function Home() {
  const [openQuestion, toggleOpenQuestion] = useToggle(false);

  let content;
  if (openQuestion) {
    //--content = question compoonent
    content = <> {console.log(openQuestion)}</>;
  } else {
    //--content = lading page
    content = (
      <>
        <Header toggleQuestions={toggleOpenQuestion} />
      </>
    );
  }
  return (
    <StyledBody>
      <main>{content}</main>
    </StyledBody>
  );
}
