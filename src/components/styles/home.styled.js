import styled from "styled-components";
import { Link } from "react-router-dom";

export const Country = styled(Link)`
  text-decoration: none;
  height: 350px;
  box-shadow: 0px 5px 24px -2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  color: hsl(200, 15%, 8%);
  background: ${(props) => props.theme.elementBg};
  .country--about {
    padding: 1.5rem 1.5rem;
    h5 {
      font-weight: 800;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    ul {
      margin-top: 0.8rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      li {
        font-weight: 600;
        span {
          font-weight: 300;
        }
      }
    }
  }
  .country--image {
    /* width: 100%; */
    width: 100%;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 0 2rem;
  }
`;
