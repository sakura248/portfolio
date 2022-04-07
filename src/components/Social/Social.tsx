import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SocialLink, SocialWrapper } from "./social.styles";

function Social() {
  return (
    <SocialWrapper>
      <SocialLink
        href="https://github.com/sakura248"
        target="_blank"
        rel="noopener"
      >
        <BsGithub />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/sakura-nishiya/"
        target="_blank"
        rel="noopener"
      >
        <BsLinkedin />
      </SocialLink>
    </SocialWrapper>
  );
}

export default Social;
