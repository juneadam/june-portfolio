//component to create a vertical Navbar for desktop view

import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Link to="/">
        <NavIcon type="home" icon="fa-solid fa-house" hide={hide} />
      </Link>
      <Link to="/projects">
        <NavIcon type="projects" icon="fa-solid fa-rocket" hide={hide} />
      </Link>
      <Link to="/resume">
        <NavIcon type="resume" icon="fa-solid fa-file-text" hide={hide} />
      </Link>
      <Link to="/contact">
        <NavIcon type="contact" icon="fa-solid fa-envelope" hide={hide} />
      </Link>
      <div className="social-hole flex place-content-evenly ">
        {/* self-center and w-56 make the social links static on stretch - do i like this better? 
        or is it more fun when they stretch with the bar? */}
        <a href="https://www.github.com/juneadam" target="_blank" rel="noreferrer">
          <NavIcon type="github" icon="fa-brands fa-github" hide={hide} />
          {/* <FontAwesomeIcon icon="fa-brands fa-github" size="xl" /> */}
        </a>
        <a href="https://www.linkedin.com/in/june-balter" target="_blank" rel="noreferrer">
        <NavIcon type="linkedin" icon="fa-brands fa-linkedin" hide={hide} />
          {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" /> */}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
