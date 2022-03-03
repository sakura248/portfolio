import React from "react";
import { Section, Block } from "./skills.styles";
import {
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMaterialui,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { ImAccessibility } from "react-icons/im";

function About() {
  return (
    <Section>
      <h2>SKILLS</h2>
      <ul>
        <Block>
          <SiReact />
          <p>React</p>
        </Block>
        <Block>
          <SiRedux />
          <p>Redux</p>
        </Block>
        <Block>
          <SiNodedotjs />
          <p>Nod</p>
        </Block>
        <Block>
          <SiTypescript />
          <p>TypeScript</p>
        </Block>
        <Block>
          <SiJavascript />
          <p>JavaScript</p>
        </Block>
        <Block>
          <SiHtml5 />
          <p>HTML5</p>
        </Block>
        <Block>
          <SiCss3 />
          <p>CSS3</p>
        </Block>
        <Block>
          <FaSass />
          <p>SASS</p>
        </Block>
        <Block>
          <SiTailwindcss />
          <p>tailwind CSS</p>
        </Block>
        <Block>
          <SiMaterialui />
          <p>Material UI</p>
        </Block>
        <Block>
          <SiFirebase />
          <p>Firebase</p>
        </Block>
        <Block>
          <ImAccessibility />
          <p>Accessibility</p>
        </Block>
        <Block>
          <SiGit />
          <p>Git</p>
        </Block>
      </ul>
    </Section>
  );
}

export default About;
