import React from "react";
import { Section } from "./footer.styles";
import Social from "../../Social/Social";

function Footer() {
  return (
    <div>
      <Section>
        <Social />
        <p>&copy; 2022 Sakura Nishiya </p>
      </Section>
    </div>
  );
}

export default Footer;
