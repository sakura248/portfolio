import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  padding: 3rem;

  h2 {
    font-size: 3.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
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
    background-color: #f2f4f6;
    border: none;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }

  button {
    border-radius: 50px;
    background-color: #00ebc7;
    color: #00214d;
    margin: 20px auto;
    cursor: pointer;
    padding: 15px;
    font-size: 1rem;
    font-weight: 700;
    width: 200px;
    border: none;
  }

  button:hover {
    opacity: 0.7;
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
