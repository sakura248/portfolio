import React from "react";
import { Section } from "./about.styles";

function About() {
  return (
    <Section id="about">
      <h2>ABOUT</h2>
      <article>
        Hi there! I'm Sakura Nishiya. I started my journey as a front-end
        developer and actively seeking employment! I'm skilled in{" "}
        <span>HTML, Javascript, and React</span>. I'm passionate about coding
        creating!
      </article>
      <article>
        I have a 4 plus years experience as a Web Director (a kind of project
        manager) and I've dedicated <span>UI/UX design</span> improvement
        projects, <span>QA testing</span>, schedule and contents quality
        management for some major enterprises in Japan. I also could learn about
        design thinking, customer centric design and accessibility design .e.g.
        color blindness.
      </article>
      <article>
        Working with those large enterprises as a web director have developed my
        accountability and communication skill. However, I felt incompleteness
        and I started having strongly desire to create by my own hands and
        enough skills to jump into the businesses that resonates with me.
      </article>
      <article>
        I’m now looking for a junior developer position to finally kick start my
        career and learn among professionals.
      </article>
    </Section>
  );
}

export default About;
