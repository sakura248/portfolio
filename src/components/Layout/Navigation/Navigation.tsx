import React, { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import Social from "../../Social/Social";
import "./navigation.css";
import { DesktopMenu } from "./navigation.styles";

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    console.log(isOpen);
    setOpen(false);
  };
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  // const toggleMenu = () => {
  //   if (isOpen) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // };

  return (
    <>
      <div className="mobile-menu">
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
          <a href="#skills" onClick={handleClose}>
            SKILLS
          </a>
          <a href="#projects" onClick={handleClose}>
            PROJECTS
          </a>
          <a href="#about" onClick={handleClose}>
            ABOUT
          </a>
          <a href="#contact" onClick={handleClose}>
            CONTACT
          </a>
          <Social />
        </Menu>
        {/* </NavList> */}
      </div>
      <DesktopMenu className="desktop-menu">
        <ul>
          <li>
            <a href="#top" onClick={handleClose}>
              TOP
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleClose}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClose}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleClose}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClose}>
              CONTACT
            </a>
          </li>
        </ul>
      </DesktopMenu>
    </>
  );
}

export default Navigation;
