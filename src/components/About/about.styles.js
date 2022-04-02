import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  padding-top: 3rem;

  article {
    max-width: 80%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: 700;
  }

  .ContentsWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: rgba(238, 232, 227, 0);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    z-index: 5;
  }

  @media only screen and (min-width: 768px) {
    article {
      max-width: 700px;
    }
  }
`;

export const SvgBG = styled.div`
  svg:first-child {
    position: absolute;
    z-index: 2;
    right: 15%;
    bottom: 25%;
  }
  svg:last-child {
    position: absolute;
    z-index: 2;
    right: 30%;
    top: 20%;
  }
`;
