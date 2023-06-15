//component to create a vertical Navbar

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useIcon() {
  const [iconHover, setIconHover] = useState(false);

  const handleIconHover = () => {
    if (!iconHover) {
      setIconHover(true);
    } else {
      setIconHover(false);
    }
  };

  let hide = "";
  if (!iconHover) {
    hide = "hidden";
  } else {
    hide = "visible";
  }

  let pushUp = "";
  if (!iconHover) {
    pushUp = "";
  } else {
    pushUp = "visible";
  }

  return { handleIconHover, hide, pushUp };
}

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

  const { handleIconHover, hide, pushUp } = useIcon();

  return (
    <div
      className={`navbar h-screen flex flex-col justify-evenly text-center border border-black transition-[width] ease-linear duration-450 ${barWidth}`}
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
      <div
        className="icon-hole mx-auto hover:transition-all hover:ease-in-out duration-450 hover:shadow-hover-glow hover:bg-teal-500 focus:shadow-focus-glow"
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconHover}
      >
        <FontAwesomeIcon
          className={`p-1 hover:transition-all hover:ease-in-out duration-450 ${pushUp}`}
          icon="fa-solid fa-envelope"
          size="2xl"
          style={{ color: "#aae3ff" }}
        />
        <div className={`nav-text ${hide}`}>Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
