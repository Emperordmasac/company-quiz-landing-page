import styled from "styled-components";

export const StyledHelpListItem = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 5rem;
  flex-direction: ${({ reverseOrder }) =>
    reverseOrder ? "row-reverse" : "row"};
  margin-top: 4rem;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

// export const StyledHelpListImage = styled.div`
//   flex-basis: 30%;

//   @media screen and (min-width: 481px) and (max-with: 1020px) {
//     flex-basis: 45%;
//   }

//   @media screen and (max-width: 480px) {
//     flex-basis: 100%;
//   }
// `;

export const StyledHelpListImage = styled.div`
  flex-basis: 30%;

  @media screen and (min-width: 481px) and (max-width: 1020px) {
    flex-basis: 45%;
  }

  @media screen and (max-width: 480px) {
    flex-basis: 100%;
  }
`;

export const StyledHelpListNUmber = styled.span`
  font-size: 427px;
  font-weight: bold;
  color: #eee;
  position: absolute;
  z-index: -10;
  margin-left: ${({ reverseOrder }) => reverseOrder && "10rem"};
  margin-right: ${({ reverseOrder }) => reverseOrder && "25rem"};

  @media screen and (max-width: 480px) {
    font-size: 250px;
    margin: 0;
    margin-top: 10rem;
  }
`;

export const StyledHelpListItemContent = styled.div`
  text-align: ${({ reverseOrder }) => (reverseOrder ? "right" : "left")};
  flex-basis: 30%;
  position: relative;

  @media screen and (max-width: 481px) and (max-width: 1020px) {
    flex-basis: 45%;
  }

  @media screen and (max-width: 480px) {
    flex-basis: 100%;
    text-align: left;
  }

  h5 {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 22px;
    line-height: 1.45;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.pineGreen};
  }

  p {
    font-family: "Open Sans";
    font-size: 16px;
    line-height: 1.83;
    color: ${({ theme }) => theme.colors.pineGreen};
  }
`;
