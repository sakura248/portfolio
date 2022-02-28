import React, { useState } from "react";
import { NavList } from "./navigation.style";
import { bubble as Menu } from "react-burger-menu";
import { Slant as Hamburger } from "hamburger-react";
import "./navigation.css";

function Navigation() {
  const [show, setShow] = useState(false);
  const showSettingn = (e) => {
    e.preventDefault();
    // if (show) {
    //   setShow(false);
    // } else {
    //   setShow(true);
    // }
  };

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
        // isOpen={show}
      >
        <a href="#">TOP</a>
        <a href="#">ABOUT</a>
        <a href="#">SKILLS</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
      </Menu>
    </>
  );
}

export default Navigation;
