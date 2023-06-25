import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactCard(props) {
  // button array checks for links that might have been imported
  // from the json file for the particular entry and creates
  // appropriate buttons as needed

  let buttonArray = [];

  props.deploy
    ? buttonArray.push(
        <a
          key={props.title + props.deploy}
          href={props.title}
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
    <div className="card-wrapper relative mx-3 grid-cols-1 grid-rows-3 min-w-[250px] max-w-[50%] h-3/5 rounded-md border border-black shadow-slate-800 shadow-xl transition-all hover:ease-in-out duration-700 hover:shadow-hover-card">
      <div className="card-image-div h-1/2 min-h-fill overflow-hidden rounded-t-md row-span-1 grid place-content-center">
        <img
          className="object-cover"
          src={props.image}
          alt="card-portrait"
        ></img>
      </div>
      <div className="card-content border-y px-6 pb-6 min-h-fit h-1/4 bg-lime-200/90">
        <h1 className="text-2xl 2xl:text-4xl text-right font-semibold py-1 lg:py-4">
          {props.title}
        </h1>
        <p className="lg:py-1 text-xs 2xl:text-lg text-right">
          {props.content}
        </p>
      </div>
      <div className="card-links text-sm 2xl:text-lg px-6 py-3 min-h-fit h-1/4 bg-lime-200/90 flex flex-wrap flex-col justify-around items-end rounded-b-md">
        {buttonArray}
      </div>
      <div className="shader absolute inset-0 rounded-md pointer-events-none"></div>
      <div className="select-glow absolute inset-0 pointer-events-none"></div>
    </div>
  );
}

export default ContactCard;
