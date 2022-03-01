import React from "react";
import { Section, Hello, Greeting } from "./hero.styles";
import Social from "../Social/Social";

function Hero() {
  return (
    <Section>
      <Hello>Hello 🌸</Hello>
      <Greeting>
        I’m Sakura Nishiya.
        <br />
        Front-end Developer who has background of project management and problem
        solving.
      </Greeting>
      <Social />
    </Section>
  );
}

export default Hero;
