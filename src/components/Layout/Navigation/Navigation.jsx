import React, { useState } from "react";
import { NavList } from "./navigation.style";
import { bubble as Menu } from "react-burger-menu";
import { Slant as Hamburger } from "hamburger-react";

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
      <Hamburger onClick={showSettingn} toggeld={show} toggle={setShow}>
        test
      </Hamburger>
      <Menu right pageWrapId={"page-wrap"} isOpen={show}>
        <NavList style={{ backgroundColor: "#fff" }}>
          <li>
            <a href="#">TOP</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SKILLS</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </NavList>
      </Menu>
    </>
  );
}

export default Navigation;
