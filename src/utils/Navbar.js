//component to create a vertical Navbar for desktop view

import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {

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
      className={`Navbar z-50 h-screen w-1/6 hover:w-1/4 flex flex-col justify-evenly text-center transition-[width] ease-linear duration-500`}
      onMouseEnter={props.wideOnMouse}
      onMouseLeave={props.wideOnMouse}
    >
      <Link to="/">
        <NavIcon type="home" icon="fa-solid fa-house" size="2xl" textSize="text-xl" hide={hide} />
      </Link>
      <Link to="/about">
        <NavIcon type="about" icon="fa-solid fa-circle-info" size="2xl" textSize="text-xl" hide={hide} />
      </Link>
      <Link to="/projects">
        <NavIcon type="projects" icon="fa-solid fa-rocket" size="2xl" textSize="text-xl" hide={hide} />
      </Link>
      <Link to="/resume">
        <NavIcon type="resume" icon="fa-solid fa-file-text" size="2xl" textSize="text-xl" hide={hide} />
      </Link>
      <Link to="/contact">
        <NavIcon type="contact" icon="fa-solid fa-envelope" size="2xl" textSize="text-xl" hide={hide} />
      </Link>
      <div className="social-hole flex flex-col md:flex-row md:place-content-evenly ">
        {/* self-center and w-56 make the social links static on stretch - do i like this better? 
        or is it more fun when they stretch with the bar? */}
        <a href="https://www.github.com/juneadam" target="_blank" rel="noreferrer">
          <NavIcon type="github" icon="fa-brands fa-github" size="xl" textSize="text-md" hide={hide} />
        </a>
        <a href="https://www.linkedin.com/in/june-balter" target="_blank" rel="noreferrer">
        <NavIcon type="linkedin" icon="fa-brands fa-linkedin" size="xl" textSize="text-md" hide={hide} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
