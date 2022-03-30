import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  padding: 0.5rem;

  h2 {
    font-size: 3.5rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }
`;

export const Block = styled.li`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  padding: 15px 0;

  svg {
    font-size: 2rem;
  }

  p {
    margin: 7px 0 0 0;
  }
`;

// display: grid;
// grid-template-columns: repeat(5, 1fr);
// column-gap: 2rem;
// row-gap: 2rem;
