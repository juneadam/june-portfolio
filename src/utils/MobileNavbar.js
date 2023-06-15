import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";

function MobileNavbar(props) {

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
      className={`navbar w-screen flex flex-row absolute bottom-0 justify-evenly text-center transition-[width] ease-linear duration-500`}
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
    </div>
  );
}

export default MobileNavbar;
