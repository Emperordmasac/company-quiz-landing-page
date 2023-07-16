import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #e5f5f4;
  padding: 78px 40px 27px;

  p {
    text-align: center;
    font-size: 12px;
    font-family: open_sans;
    padding: 27px 0;
    color: rgba(108, 108, 108, 0.5);

    @media screen and (max-width: 480px) {
      text-align: center;
    }
  }
`;

export const StyledFooterContent = styled.div`
  display: flex;
  padding-bottom: 4rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    text-align: center;
  }

  a {
    display: block;
    text-decoration: none;
    font-size: 14px;
    line-height: 2.57;
    color: ${({ theme }) => theme.colors.pineGreen};
  }

  h5 {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 2.4px;
  }
`;

export const StyledFooterImage = styled.div`
  flex-basis: 35%;

  @media screen and (max-width: 1024px) {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 480px) {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }
`;

export const StyledFooterItem = styled.div`
  flex-basis: 15%;

  &.social {
    a {
      display: inline-block;
      font-size: 19px;
      padding-right: 30px;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-basis: 50%;
    margin-bottom: 2rem;

    &.social {
      a {
        padding: 0 30px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    flex-basis: 10 0%;
    margin-bottom: 2rem;

    &.social {
      a {
        padding: 0 30px;
      }
    }
  }
`;
