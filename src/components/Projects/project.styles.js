import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  div {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    margin: 20px;
    padding-top: 50px;
    flex-direction: row;
    flex-wrap: wrap;

    p {
      text-align: center;
    }

    img {
      width: 350px;
    }

    ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 5px 0;
    }

    li {
      background-color: #fffffe;
      color: #00214d;
      padding: 2.5px 7.5px;
      margin: 0 5px;
      border-radius: 6px;
      font-size: 0.9rem;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;

      a {
        text-decoration: none;
        color: #ff5470;
        padding: 2.5px 7.5px;
        margin: 0 5px;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;
