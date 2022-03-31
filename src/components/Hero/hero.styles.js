import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;

  svg:hover {
    fill: #00ebc7;
  }
`;

export const ContentsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  background: rgba(238, 232, 227, 0);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  z-index: 5;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Hello = styled.h1`
  font-size: 4rem;
  margin: 0 auto 2rem 0;
`;

export const Greeting = styled.p`
  font-size: 1.25rem;
  margin: 0 auto 2.75rem 0;
`;

export const MyImg = styled.div`
  position: relative;
  width: 500px;
  height: 500px;

  img {
    height: 300px;
    position: absolute;
    border-radius: 50%;
    object-fit: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
