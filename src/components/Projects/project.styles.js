import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 20px; auto;

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
    background-color: #e3f6f5;
    color: #272343;
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
      color: #FF3495;
      padding: 2.5px 7.5px;
      margin: 0 5px;
    }

    a:hover {
      color: #272343;
    }
  }

}
`;
