import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  // rV is range value for the carousel component,
  // not needed in other uses

  let rV = "";
  props.rV ? (rV = props.rV) : void 0;

  // button array checks for links that might have been imported
  // from the json file for the particular entry and creates
  // appropriate buttons as needed

  let buttonArray = [];

  // console.log(
  //   `deploy : ${props.deploy} github : ${props.github} demo : ${props.deploy}`
  // );

  props.deploy
    ? buttonArray.push(
        <a
          key={props.title + props.deploy}
          href={props.deploy}
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:scale-125 hover:text-carousel-toggle"
        >
          <button>
            <FontAwesomeIcon icon={props.deployIcon} /> Visit
          </button>
        </a>
      )
    : void 0;

  props.linkedin
    ? buttonArray.push(
        <a
          key={props.title + props.linkedin}
          href={props.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:scale-125 hover:text-carousel-toggle"
        >
          <button>
            <FontAwesomeIcon icon={props.linkedinIcon} /> LinkedIn
          </button>
        </a>
      )
    : void 0;

  props.github
    ? buttonArray.push(
        <a
          key={props.title + props.github}
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:scale-125 hover:text-carousel-toggle"
        >
          <button>
            <FontAwesomeIcon icon={props.githubIcon} /> Github
          </button>
        </a>
      )
    : void 0;

  props.demo
    ? buttonArray.push(
        <a
          key={props.title + props.demo}
          href={props.demo}
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:scale-125 hover:text-carousel-toggle"
        >
          <button>
            <FontAwesomeIcon icon={props.demoIcon} /> Demo Video
          </button>
        </a>
      )
    : void 0;

  props.etc
    ? buttonArray.push(
        <a
          key={props.title + props.etc}
          href={props.etcLink}
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:scale-125 hover:text-carousel-toggle"
        >
          <button>
            <FontAwesomeIcon icon={props.etcIcon} />
            {props.etc}
          </button>
        </a>
      )
    : void 0;

  return (
    <div className="card-wrapper relative mx-3 grid-cols-1 grid-rows-3 min-w-[250px] max-w-[500px] h-3/5 rounded-md border border-black transition-all hover:ease-in-out duration-700 hover:shadow-hover-card">
      <div className="card-image-div h-1/2 min-h-fill overflow-hidden rounded-t-md row-span-1 grid place-items-center">
        <img
          className="object-cover"
          src={props.image}
          alt="card-portrait"
        ></img>
      </div>
      <div className="card-content border-y px-6 pb-4 min-h-fit h-1/4 border-black bg-lime-200/90">
        <h1 className="text-md 2xl:text-xl text-right font-semibold py-4">
          {props.title}
        </h1>
        <p className="py-1 text-xs 2xl:text-md text-right">{props.content}</p>
      </div>
      <div className="card-links px-6 py-3 min-h-fit h-1/4 bg-lime-200/90 flex flex-wrap flex-col justify-around items-end rounded-b-md">
        {buttonArray}
      </div>
      <div className="shader absolute inset-0 rounded-md pointer-events-none"></div>
      <div
        key={rV}
        className="select-glow absolute inset-0 pointer-events-none"
      ></div>
    </div>
  );
}

export default Card;
