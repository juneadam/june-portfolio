//component for homepage icons

import "./NavIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavIcon(props) {
  return (
    <button
      key={props.type}
      className="icon-hole px-1 rounded-2xl mx-auto text-slate-300 transition-all hover:ease-in-out duration-500 hover:text-slate-300 hover:shadow-hover-glow hover:bg-pink-500 focus:shadow-focus-glow focus:bg-cyan-300/70"
    >
      <FontAwesomeIcon
        className="faIcon p-1 pt-3 z-10 transition-all ease-in-out duration-500"
        icon={props.icon}
        size={props.size}
        style={{ color: "#aae3ff" }}
      />
      <div
        className={`nav-text text-xs md:${props.textSize} z-0 md:-translate-y-1.5 transition-all ease-linear font-semibold uppercase focus:text-slate-100 focus:visible`}
      >
        {props.type}
      </div>
    </button>
  );
}

export default NavIcon;
