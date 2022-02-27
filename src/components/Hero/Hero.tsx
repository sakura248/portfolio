import React from "react";
import { Hello, Greeting } from "./hero.style";
import Social from "../Social/Social";

function Hero() {
  return (
    <div>
      <Hello>Hello 🌸</Hello>
      <Greeting>
        I’m Sakura Nishiya.
        <br />
        Front-end Developer who has background of project management and problem
        solving.
      </Greeting>
      <Social />
    </div>
  );
}

export default Hero;
