import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.3);
  z-index: 10;
  background: ${(props) => props.theme.elementBg};

  div {
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      fill: #fff;
      stroke: ${(props) => props.theme.moonStroke};
    }
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;

    div {
      font-weight: 300;
    }
  }
`;

export const HeadStyle = styled(Link)`
  font-weight: 800;
  font-size: 1.3rem;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;
