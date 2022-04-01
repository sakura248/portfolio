import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  div {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 20px;
    padding-top: 50px;
    flex-direction: column;
    flex-wrap: wrap;

    p {
      text-align: center;
      margin: 15px 35px;
    }

    img {
      width: 350px;
    }

    ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 5px 0;
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      background-color: #fffffe;
      color: #00214d;
      padding: 2.5px 7.5px;
      margin: 3px 5px;
      border-radius: 6px;
      font-size: 0.9rem;
    }

    .link-area {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;

      a {
        text-decoration: none;
        color: #ff5470;
        padding: 2.5px 7.5px;
        margin: 0 5px;
      }

      a:hover {
        text-decoration: underline;
      }

      a::after {
        content: "↗";
      }
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;

    div {
      width: 400px;
    }
  }
`;
