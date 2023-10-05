import { HiOutlineMoon } from "react-icons/hi";
import { HeadStyle, StyledHeader } from "./styles/header.styled";

const Header = ({ handleDarkMode }) => {
  return (
    <StyledHeader>
      <HeadStyle to={"/"}>Where in the World?</HeadStyle>
      <div onClick={handleDarkMode}>
        <HiOutlineMoon />
        Dark Mode
      </div>
    </StyledHeader>
  );
};

export default Header;
