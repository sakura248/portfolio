import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  flex-direction: column;
  padding: 3rem;

  svg:hover {
    fill: #00ebc7;
  }
`;

export const Hello = styled.h1`
  font-size: 4rem;
  margin: 0 auto 2rem 0;
`;

export const Greeting = styled.p`
  font-size: 1.25rem;
  margin: 0 auto 2.75rem 0;
`;

// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
