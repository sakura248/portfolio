import React, { useState } from "react";
import Social from "../../Social/Social";

import { NavList } from "./navigation.styles";
import { bubble as Menu } from "react-burger-menu";

import "./navigation.css";

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    console.log(isOpen);
    setOpen(false);
  };
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Menu
        right
        width={"100%"}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        isOpen={isOpen}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <a href="#top" onClick={handleClose}>
          TOP
        </a>
        <a href="#about" onClick={handleClose}>
          ABOUT
        </a>
        <a href="#skills" onClick={handleClose}>
          SKILLS
        </a>
        <a href="#projects" onClick={handleClose}>
          PROJECTS
        </a>
        <a href="#contact" onClick={handleClose}>
          CONTACT
        </a>
        <Social />
      </Menu>
    </>
  );
}

export default Navigation;
