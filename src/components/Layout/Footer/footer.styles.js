import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  background-color: #2c2c2c;
  color: #fffffe;

  svg {
    fill: #fffffe;
  }

  svg:hover {
    fill: #89d5ff;
  }

  .wrapper {
    display: flex;
  }

  .resume {
    color: #fffffe;
    border: #fffffe 2px solid;
    margin-right: 20px;

    svg {
      fill: none;
    }
  }

  .resume:hover {
    background-color: #fffffe;
    color: #2c2c2c;
  }
`;
