import "./Blurb.css"

function Blurb(props) {
  return (
    <div className="Blurb blurb-glow m-2 lg:m-10 px-5 py-3 z-0 leading-snug overflow-x-hidden overflow-y-auto flex flex-wrap content-evenly rounded-2xl bg-transparent border-collapse line border-slate-300/70 hover:border-[#f9706890] text-slate-300 transition-all duration-1000 ease-in-out">
      <div id="text" className="pb-4 text-sm sm:text-md leading-tight lg:text-xl xl:text-3xl">
      <p className="z-40" id="para-one">
        Freelance web developer & software engineer, currently living in Nashville, TN.
      </p>
      <p className="z-10" id="para-two">
        
      </p></div>
      <div className="techs-found flex flex-wrap text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-3xl">{props.techsFound}</div>
    </div>
  );
}

export default Blurb;
