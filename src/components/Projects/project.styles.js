import styled from "styled-components";

export const Block = styled.div`
width: 90%;
  display: flex;
  flex-direction: column;
  
  .project-container{
    flex-direction: column;
    border-top: 1px solid #000;
    display: flex;
    justify-content: flex-start;
  }

  .project-block {
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 20px;
    padding-bottom: 50px;
    flex-direction: column;
    
    

    p {
      margin-right: 20px;
    }

    img {
      width: 350px;
      border: 2px solid black;
      border-radius: 10px;
    }

    ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 5px 0;
      flex-wrap: wrap;
      justify-content: flex-start
    }

    li {
    background-color: #fffffe;
    color: #ff0000;
    padding: 2.5px 7.5px;
    margin: 3px 5px;
    border-radius: 6px;
    font-size: 0.9rem;
    }

    // li::before {
    //   content: "# ";
    // }

    .link-area {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;
      margin-bottom: 15px;

      a {
        color: #000;
        margin-right: 15px;
        font-weight: 700;
      }

      a:hover {
        text-decoration: underline;
      }

      a::after {
        content: "↗";
      }
    }

    .info-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }


  }

  @media only screen and (min-width: 768px) {
    width: 80%;

    .project-block {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

  }
`;

export const PjtImg = styled.div`

    a {
      position: relative
    }
    .static {
      position:absolute;
    }

    .static:hover {
      opacity:0;
    }
    }
`;
