import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  padding: 3rem;

  width: 70%;

  h2 {
    font-size: 3.5rem;
  }

  div {
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 3rem;
  }
`;

// display: grid;
// grid-template-columns: repeat(5, 1fr);
// column-gap: 2rem;
// row-gap: 2rem;
