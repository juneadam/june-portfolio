import "./Blurb.css"

function Blurb(props) {
  return (
    <div className="Blurb blurb-glow m-10 px-5 py-3 z-0 leading-snug overflow-x-hidden overflow-y-auto flex flex-wrap rounded-2xl bg-transparent border-collapse line border-slate-300/70 hover:border-[#f9706890] text-slate-300 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-3xl transition-all duration-1000 ease-in-out">
      <p className="z-10">
        Full Stack Software Engineer, currently living in Nashville,
        TN and working as a freelance web developer and engineer.
      </p>
      <p className="z-10">
        June is a creative problem solver and a leader on every team she joins.
        She's taken apps from conception to deployment, and is always eager to
        learn new technologies and find new solutions to tough problems.
      </p>
      <div className="flex flex-wrap">{props.techsFound}</div>
    </div>
  );
}

export default Blurb;
