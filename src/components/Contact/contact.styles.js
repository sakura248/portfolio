import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    max-width: 700px;
  }
  label {
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 15px;
    background-color: #fffffe;
    border: none;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    border: 1px solid black;
  }

  button {
    border-radius: 50px;
    background-color: #fffffe;
    color: #000;
    margin: 20px auto;
    cursor: pointer;
    padding: 15px;
    font-size: 1.25rem;
    font-weight: 700;
    width: 100%;
    border: 2px solid #000;
    transition: ease-out 200ms;
  }

  button:hover {
    background-color: #000;
    color: #fffffe;
  }

  button:disabled {
    background-color: #dedede;
    cursor: default;
    color: #424242;
    border: none;
  }

  button:disabled:hover {
    opacity: 1;
  }

  div {
    background-color: #feeefa;
    border: 2px dotted #fac2ec;
    border-radius: 10px;
    padding: 50px 30px;

    p {
      text-align: center;
    }
  }
`;
