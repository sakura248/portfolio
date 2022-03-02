import React, { useState } from "react";
import { NavList } from "./navigation.styles";
import { bubble as Menu } from "react-burger-menu";
import "./navigation.css";

function Navigation() {
  const [show, setShow] = useState(false);
  console.log(show);

  const handleOnClose = () => {
    setShow(false);
  };

  const isMenuOpen = () => {
    return show;
  };

  return (
    <>
      <Menu
        right
        width={"100%"}
        onStateChange={isMenuOpen}
        onClose={handleOnClose}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <a href="#top">TOP</a>
        <a href="#about" onClick={handleOnClose}>
          ABOUT
        </a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </Menu>
    </>
  );
}

export default Navigation;
