//component to create a vertical Navbar

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { useState } from "react";

function Navbar(props) {
  let barWidth = "";
  if (props.wide === false) {
    barWidth = "w-1/6";
  } else {
    barWidth = "w-1/4";
  }
  // Navbar takes in the props wide (a Boolean) and wideOnclick (a function that changes
  // wide from false to true) from the parent component. We use that to set the barWidth
  // variable to a Tailwind class size, allowing us to expand and contract the navbar.

  return (
    <div
      className={`navbar h-screen flex flex-col justify-evenly align-stretch text-center border border-black transition-[width] ease-linear duration-450 ${barWidth}`}
      onMouseEnter={props.wideOnMouse}
      onMouseLeave={props.wideOnMouse}
    >
      <div className="icon-hole">
        <FontAwesomeIcon
          icon="fa-solid fa-house"
          size="2xl"
          style={{ color: "#aae3ff" }}
        />
      </div>
      <div className="icon-hole">
        <FontAwesomeIcon
          icon="fa-solid fa-rocket"
          size="2xl"
          style={{ color: "#aae3ff" }}
        />
      </div>
      <div className="icon-hole">
        <FontAwesomeIcon
          icon="fa-solid fa-file-text"
          size="2xl"
          style={{ color: "#aae3ff" }}
        />
      </div>
      <div className="icon-hole">
        <FontAwesomeIcon
          icon="fa-solid fa-envelope"
          size="2xl"
          style={{ color: "#aae3ff" }}
        />

      </div>
    </div>
  );
}

export default Navbar;
