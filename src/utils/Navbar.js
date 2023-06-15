//component to create a vertical Navbar

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavIcon from "./NavIcon";

function Navbar(props) {
  let barWidth = "";
  if (props.wide === false) {
    barWidth = "w-1/6";
  } else {
    barWidth = "w-1/4";
  }

  let hide = "";
  if (!props.wide) {
    hide = "invisible";
  } else {
    hide = "visible";
  }
  // Navbar takes in the props wide (a Boolean) and wideOnclick (a function that changes
  // wide from false to true) from the parent component. We use that to set the barWidth
  // variable to a Tailwind class size, allowing us to expand and contract the navbar.

  return (
    <div
      className={`navbar h-screen flex flex-col justify-evenly text-center transition-[width] ease-linear duration-500 ${barWidth}`}
      onMouseEnter={props.wideOnMouse}
      onMouseLeave={props.wideOnMouse}
    >
      <NavIcon type="home" icon="fa-solid fa-house" hide={hide} />
      <NavIcon type="projects" icon="fa-solid fa-rocket" hide={hide} />
      <NavIcon type="resume" icon="fa-solid fa-file-text" hide={hide} />
      <NavIcon type="contact" icon="fa-solid fa-envelope" hide={hide} />
    </div>
  );
}

export default Navbar;
