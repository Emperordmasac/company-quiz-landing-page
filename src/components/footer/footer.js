import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../container/container";
import {
  StyledFooter,
  StyledFooterContent,
  StyledFooterImage,
  StyledFooterItem,
} from "./footer.styled";

import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>
          <StyledFooterImage>
            <Image
              src="/img/manual-symblol@3x.png"
              alt="maunual"
              width="100"
              height="100"
            />
          </StyledFooterImage>
          <StyledFooterItem>
            <h5>Product</h5>
            <Link href="/">Popular</Link>
            <Link href="/">Trending</Link>
            <Link href="/">Guided</Link>
            <Link href="/">Products</Link>
          </StyledFooterItem>
          <StyledFooterItem>
            <h5>Company</h5>
            <Link href="/">Press Release</Link>
            <Link href="/">Mission</Link>
            <Link href="/">Strategy</Link>
            <Link href="/">About</Link>
          </StyledFooterItem>
          <StyledFooterItem>
            <h5>Info</h5>
            <Link href="/">Support</Link>
            <Link href="/">Customer Service</Link>
            <Link href="/">Get Started Guide</Link>
          </StyledFooterItem>
          <StyledFooterItem className="social">
            <h5>Follow Us</h5>
            <Link href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </StyledFooterItem>
        </StyledFooterContent>
        <hr />
        <p>© 2023 Manual. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
