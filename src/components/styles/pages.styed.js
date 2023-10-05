import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  width: 100%;

  div.search--filter {
    display: flex;
    justify-content: space-between;
  }
  div.countries {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 3rem;
    grid-column-gap: 4rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1.5rem 1.5rem;
    div.countries {
      grid-template-columns: repeat(1, 1fr);
    }
    div.search--filter {
      flex-direction: column;
    }
  }
`;
