import { useState } from "react";

function Accordion(props) {
  const [title, content] = props.accordionData;

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion justify-center cursor-pointer hover:shadow-hover-glow focus:shadow-focus-glow transition-[height] bg-emerald-200">
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
