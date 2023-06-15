//component for homepage icons

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useIcon() {
  const [iconFocus, setIconFocus] = useState(false);

  const handleIconFocus = () => {
    if (!iconFocus) {
      setIconFocus(true);
    } else {
      setIconFocus(false);
    }
  };

  let pushUp = "";
  if (!iconFocus) {
    pushUp = "";
  } else {
    pushUp = "-translate-y-2";
  }

  let textColor = "";
  if (!iconFocus) {
    textColor = "text-slate-300";
  } else {
    textColor = "text-slate-100";
  }

  return { handleIconFocus, pushUp, textColor };
}

function MobileNavIcon(props) {
  const { handleIconFocus, pushUp, textColor } = useIcon();

  return (
    <button
      key={props.type}
      className="icon-hole px-1 rounded-2xl mx-auto transition-all focus:ease-in-out duration-450 focus:shadow-focus-glow focus:bg-cyan-300/70"
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
        className={`nav-text z-0 -translate-y-1.5 transition-all ease-linear font-semibold uppercase text-l ${textColor}`}
      >
        {props.type}
      </div>
    </button>
  );
}

export default MobileNavIcon;
