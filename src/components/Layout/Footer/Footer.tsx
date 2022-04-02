import React from "react";
import Social from "../../Social/Social";
import { Section } from "./footer.styles";

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
