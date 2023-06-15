//component for homepage icons

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useIconHover() {
  const [iconHover, setIconHover] = useState(false);

  const handleIconHover = () => {
    if (!iconHover) {
      setIconHover(true);
    } else {
      setIconHover(false);
    }
  };

  let pushUp = "";
  let textColor = "";
  if (!iconHover) {
    pushUp = "";
    textColor = "text-slate-300";
  } else {
    pushUp = "-translate-y-2";
    textColor = "text-slate-100";
  }

  return { handleIconHover, pushUp, textColor };
}

function useIconFocus(props) {
  const [iconFocus, setIconFocus] = useState(false);

  const handleIconFocus = () => {
    if (!iconFocus) {
      setIconFocus(true);
    } else {
      setIconFocus(false);
    }
  };

  let hide = props.hide;
  let textColorFocus = "";
  if (iconFocus) {
    textColorFocus = "text-slate-100";
    hide = "visible";
  } else {
    textColorFocus = "";
    hide = props.hide;
  }

  return { handleIconFocus, textColorFocus, hide };
}

function NavIcon(props) {
  const { handleIconHover, pushUp, textColor } = useIconHover();
  const { handleIconFocus, textColorFocus, hide } = useIconFocus(props);

  return (
    <button
      key={props.type}
      className="icon-hole px-1 rounded-2xl mx-auto transition-all hover:ease-in-out duration-450 hover:shadow-hover-glow hover:bg-pink-500 focus:shadow-focus-glow focus:bg-cyan-300/70"
      onMouseEnter={handleIconHover}
      onMouseLeave={handleIconHover}
      onFocus={handleIconFocus}
      onBlur={handleIconFocus}
    >
      <FontAwesomeIcon
        className={`p-1 pt-3 z-10 transition-all ease-in-out duration-450 ${pushUp}`}
        icon={props.icon}
        size="2xl"
        style={{ color: "#aae3ff" }}
      />
      <div
        className={`nav-text z-0 -translate-y-1.5 transition-all ease-linear font-semibold uppercase text-xl ${textColor} ${textColorFocus} ${hide}`}
      >
        {props.type}
      </div>
    </button>
  );
}

export default NavIcon;
