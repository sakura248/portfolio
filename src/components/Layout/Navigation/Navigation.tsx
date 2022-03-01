import React, { useState } from "react";
import { NavList } from "./navigation.styles";
import { bubble as Menu } from "react-burger-menu";
import { Slant as Hamburger } from "hamburger-react";
import "./navigation.css";

function Navigation() {
  const [show, setShow] = useState(false);
  // const showSettingn = (event: ) => {
  //   e.preventDefault();
  // if (show) {
  //   setShow(false);
  // } else {
  //   setShow(true);
  // }
  // };

  return (
    <>
      {/* <Hamburger
        onClick={showSettingn}
        toggeld={show}
        toggle={setShow}
        className="navBtn"
      >
        test
      </Hamburger> */}
      <Menu
        right
        width={"100%"}
        // isOpen={show}
      >
        <a href="#top">TOP</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </Menu>
    </>
  );
}

export default Navigation;
