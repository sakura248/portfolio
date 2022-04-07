import styled from "styled-components";

export const Resume = styled.a`
  border-radius: 50px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  padding: 0 15px;
  font-size: 0.85rem;
  font-weight: 700;
  border: 2px solid #000;
  transition: ease-out 200ms;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  svg {
    margin-right: 8px;
    fill: none;
  }

  :hover {
    background-color: #000;
    color: #fffffe;
  }
`;
