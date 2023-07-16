import Image from "next/image";
import { StyledHeader, StyledHeaderContent } from "./header.styled";
import Container from "../container/container";

const Header = ({ toggleQuestions }) => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <Image
            src="/img/logo.png"
            alt="manual logo"
            width="100"
            height="100"
            priority
          />
        </div>
        <StyledHeaderContent>
          <h1>Be Good To Yourself</h1>
          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <button onClick={toggleQuestions}>Take the quiz</button>
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
