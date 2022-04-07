import React from "react";
import ResumeBtn from "../../Button/ResumeBtn";
import Social from "../../Social/Social";
import { Section } from "./footer.styles";

function Footer() {
  return (
    <div>
      <Section>
        <div className="wrapper">
          <ResumeBtn />
          <Social />
        </div>
        <p>&copy; 2022 Sakura Nishiya </p>
      </Section>
    </div>
  );
}

export default Footer;
