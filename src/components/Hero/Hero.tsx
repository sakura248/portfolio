import React from "react";
import Social from "../Social/Social";
import {
  ContentsWrapper,
  Greeting,
  Hello,
  MyImg,
  Section,
  SvgBG,
  TextContainer,
} from "./hero.styles";

function Hero() {
  return (
    <Section id="top">
      <ContentsWrapper>
        <TextContainer>
          <Hello>HELLO 🌸</Hello>
          <Greeting>
            I’m Sakura Nishiya.
            <br />
            Front-end developer who has background of improving UI/UX and
            project management.
          </Greeting>
          <Social />
        </TextContainer>
        <MyImg>
          {/* <div> */}
          <img src="/assets/portfolio.png" alt="Sakura Nishiya" />
          {/* </div> */}
        </MyImg>
      </ContentsWrapper>
      <SvgBG>
        <svg
          id="visual"
          viewBox="0 0 900 900"
          width="280"
          height="280"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(447.98662388555874 443.35672604932086)">
            <path
              d="M286.3 -221.3C359.4 -136.6 399.1 -18.2 378.2 91.7C357.4 201.6 276.1 303.1 174.5 345.5C72.9 387.9 -49 371.4 -154.4 320.6C-259.8 269.8 -348.8 184.9 -372.8 83.9C-396.9 -17.1 -356 -134.2 -283 -218.9C-210.1 -303.5 -105 -355.8 0.8 -356.4C106.6 -357 213.2 -306 286.3 -221.3"
              fill="#FF3495"
            ></path>
          </g>
        </svg>
        <svg
          id="visual"
          viewBox="0 0 900 900"
          width="300"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(458.5208159420133 480.00210211436126)">
            <path
              d="M261.3 -265C332.6 -190 380.3 -95 372.6 -7.7C364.9 79.6 301.8 159.1 230.4 221.6C159.1 284.1 79.6 329.6 -7.1 336.7C-93.8 343.8 -187.6 312.6 -261 250.1C-334.3 187.6 -387.1 93.8 -390.3 -3.2C-393.5 -100.2 -347 -200.3 -273.7 -275.3C-200.3 -350.3 -100.2 -400.2 -2.6 -397.6C95 -395 190 -340 261.3 -265"
              fill="#89D5FF"
            ></path>
          </g>
        </svg>
      </SvgBG>
    </Section>
  );
}

export default Hero;
