import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: center;
  .search--filter {
    position: relative;
    .search-modal {
      background: #fff;
      position: absolute;
      top: 50px;
      left: 0;
      padding: 1rem 2rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
      background-color: ${(props) => props.theme.elementBg};
      color: ${(props) => props.theme.textColor};
    }
  }
  select {
    /* appearance: none; */
    padding: 0.5rem 1rem;
    display: flex;
    outline: none;
    border: none;
    background: ${(props) => props.theme.elementBg};
    color: ${(props) => props.theme.textColor};
    border-radius: 10px;
    option {
    }
  }
  div.search-input {
    width: 100%;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translate(0%, -50%);
      font-size: 1.5rem;
    }
    input {
      background: ${(props) => props.theme.elementBg};
      width: 300px;
      height: 40px;
      padding: 10px 50px;
      outline: none;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
    }
  }
  @media screen and (max-width: 480px) {
    /* flex-direction: column; */
    display: block;
    align-items: flex-start;
    gap: 3rem;
    div.search-input {
      width: 100%;
      margin-bottom: 2rem;
      input {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export const Search = styled(Link)`
  display: block;
  text-decoration: none;
`;
