import React from "react";
import { Section, SvgBG } from "./about.styles";

function About() {
  return (
    <Section id="about">
      <div className="ContentsWrapper">
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
          management for some major enterprises in Japan. I also could learn
          about design thinking, customer centric design and accessibility
          design .e.g. color blindness.
        </article>
        <article>
          Working with those large enterprises as a web director have developed
          my accountability and communication skill. However, I felt
          incompleteness and I started having strongly desire to create by my
          own hands and enough skills to jump into the businesses that resonates
          with me.
        </article>
        <article>
          I’m now looking for a junior developer position to finally kick start
          my career and learn among professionals.
        </article>
      </div>
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

export default About;
