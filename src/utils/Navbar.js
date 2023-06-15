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
      className={`navbar h-screen flex flex-col border align-items-center border-black transition-[width] ease-linear duration-450 ${barWidth}`}
    >
      <div className="expandIcon flex flex-row justify-content-end">
        {!props.wide ? (
          <button onClick={props.wideOnClick}>&gt;</button>
        ) : (
          <button onClick={props.wideOnClick}>X</button>
        )}
      </div>
      <div className="nav-link justify-self-center">
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
