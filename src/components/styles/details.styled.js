import { Link } from "react-router-dom";
import styled from "styled-components";

export const Country = styled.div`
  padding: 5rem 10rem;
  font-size: 16px;

  .country--details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    /* min-height: 100vh; */

    img {
      width: 45%;
      /* max-width: 420px; */
      max-height: 350px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      h2 {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 2rem;
      }
      .borders {
        display: flex;
        gap: 1rem;
        font-weight: 600;
        div {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
      }
      .info {
        display: flex;
        gap: 5rem;
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
          li {
            font-weight: 600;
            span {
              font-weight: 300;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 2rem 4rem;
    .country--details {
      flex-direction: column;
      img {
        width: 100%;
      }
      & > div {
        width: 100%;

        .info {
          flex-direction: column;
          gap: 3rem;
        }
        .borders {
          flex-direction: column;
        }
      }
    }
  }
`;

export const Back = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.elementBg};
`;

export const BorderLink = styled(Link)`
  text-decoration: none;
  padding: 0.25rem 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.elementBg};
  font-weight: 300;
`;
