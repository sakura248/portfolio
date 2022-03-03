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
    align-items: center;
  }

  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 15px;
  }

  button {
    border-radius: 50px;
    border: 1px solid #272343;
    color: #272343;
    margin: 20px;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;
    font-size: 1rem;
    width: 200px;
  }

  button:hover {
    opacity: 0.7;
  }

  button:disabled {
    background-color: #dedede;
    cursor: default;
    border: 1px solid #696969;
    color: #696969;
  }

  button:disabled:hover {
    opacity: 1;
  }
`;
