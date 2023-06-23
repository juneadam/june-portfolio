import { useState } from "react";

function Accordion(props) {
  // const [title, content] = props.accordionData;

  const content = props.techsFound
  const title = 'Technologies'

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion justify-center cursor-pointer flex bg-slate-300 text-slate-950">
      <div
        className="accordion-title w-full after:content-['+'] content-between"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="row-span-1">{title}</div>
      </div>
      {isActive && <div className="accordion-content flex flex-wrap row-span-1 min-h-fit w-11/12 transition-all duration-300">{content}</div>}
    </div>
  );
}

export default Accordion;
