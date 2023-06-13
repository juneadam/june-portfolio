import { useState } from "react";

function Accordion(props) {
  const [title, content] = props.accordionData;

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion w-1/2 flex-1 justify-center cursor-pointer hover:shadow-hover-glow focus:shadow-focus-glow bg-emerald-200">
      <div
        className="accordion-title w-full after:content-['+'] content-between"
        onClick={() => setIsActive(!isActive)}
      >
        <span>{title}</span>
      </div>
      {isActive && <div className="accordion-content flex">{content}</div>}
    </div>
  );
}

export default Accordion;
