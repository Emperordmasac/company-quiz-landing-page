import Image from "next/image";
import {
  StyledHelpListImage,
  StyledHelpListItem,
  StyledHelpListNUmber,
  StyledHelpListItemContent,
} from "./help-list-item.styled";

const HelpListItem = ({
  reverseOrder = false,
  img,
  background,
  headingOne,
  headingTwo,
  paragraph,
}) => {
  return (
    <StyledHelpListItem reverseOrder={reverseOrder}>
      <StyledHelpListImage>
        <Image src={img} alt="help" />
      </StyledHelpListImage>

      <StyledHelpListNUmber reverseOrder={reverseOrder}>
        {background}
      </StyledHelpListNUmber>

      <StyledHelpListItemContent reverseOrder={reverseOrder}>
        <h5>{headingOne}</h5>
        <h3>{headingTwo}</h3>
        <p>{paragraph}</p>
      </StyledHelpListItemContent>
    </StyledHelpListItem>
  );
};

export default HelpListItem;
