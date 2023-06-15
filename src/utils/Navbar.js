//component to create a vertical Navbar

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
      className={`navbar h-screen flex flex-col justify-around content-center border border-black transition-[width] ease-linear duration-450 ${barWidth}`}
      onMouseEnter={props.wideOnMouse}
      onMouseLeave={props.wideOnMouse}
    >
      <div className="nav-link">
        <button>Home</button>
      </div>
      <div>
        <button href="#">Projects</button>
      </div>
      <div>
        <button href="#">Resume</button>
      </div>
      <div>
        <button href="#">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
