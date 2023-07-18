"use client";

import useToggle from "@/lib/use-toogle";
import styled from "styled-components";
import { Header, Footer, HelpList, Questions } from "@/components";
import { useEffect } from "react";
import axios from "axios";

//--custom components
const StyledBody = styled.div`
  /* font-family: "Montserrat"; */
`;

export default function Home({ questions }) {
  const [openQuestion, toggleOpenQuestion] = useToggle(false);

  const getData = async () => {
    const res = await axios.get(
      "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
    );

    const data = res.data;

    console.log("data Question", data);
  };

  useEffect(() => {
    getData();
  }, []);

  let content;
  if (openQuestion) {
    //--content = question compoonent
    content = (
      <Questions questions={questions} toggleQuestions={toggleOpenQuestion} />
    );
  } else {
    //--content = lading page
    content = (
      <>
        <Header toggleQuestions={toggleOpenQuestion} />
        <HelpList />
        <Footer />
      </>
    );
  }
  return (
    <StyledBody>
      <main>{content}</main>
    </StyledBody>
  );
}
