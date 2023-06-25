// import Accordion from "../utils/Accordion";
import Portrait from "../utils/Portrait";
import Blurb from "../utils/Blurb";
import "./Home.css";

function Home(props) {
  return (
    <div className="Home w-screen h-screen grid grid-cols-12 md:grid-rows-2 grid-rows-4">
      {/* Top Row   */}

      {/* <div className="top-right-left hidden md:visible md:col-span-1"></div> */}
      <div className="home-name-hole grid md:justify-start justify-center md:text-start text-center content-center md:col-span-6 col-span-12 row-span-1">
        <h1 className="text-slate-300 text-6xl lg:text-7xl xl:text-8xl font-bold">June Balter</h1>
        <h2 className="text-slate-300 text-2xl lg:text-3xl xl:text-4xl font-bold">
          Full Stack Software Engineer
        </h2>
      </div>
      <div className="home-portrait-hole md:col-span-4 col-span-12 row-span-1 grid justify-items-center place-items-center">
        <Portrait image="june3.jpg" />
      </div>
      <div className="svg-corner-right col-span-12 md:col-span-2 row-span-1 grid md:justify-items-center md:place-items-center">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line
            className="delay-line"
            x1="50"
            y1="15"
            x2="50"
            y2="80"
            stroke="rgb(217 249 157)"
            strokeWidth="1"
          />
          <line
            className="animated-line"
            x1="60"
            y1="5"
            x2="60"
            y2="90"
            stroke="rgb(217 249 157)"
            strokeWidth="2"
          />
          <line
            className="delay-line"
            x1="70"
            y1="15"
            x2="70"
            y2="80"
            stroke="rgb(217 249 157)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Bottom Row */}

      <div className="bottom-left-corner hidden md:visible col-span-3 row-span-1 md:grid md:justify-items-center md:place-items-center">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line
            className="delay-line"
            x1="50"
            y1="15"
            x2="50"
            y2="80"
            stroke="rgb(217 249 157)"
            strokeWidth="1"
          />
          <line
            className="animated-line"
            x1="60"
            y1="5"
            x2="60"
            y2="90"
            stroke="rgb(217 249 157)"
            strokeWidth="2"
          />
          <line
            className="delay-line"
            x1="70"
            y1="15"
            x2="70"
            y2="80"
            stroke="rgb(217 249 157)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="md:col-span-1"></div>
      <div className="home-blurb-hole grid max-h-full md:col-span-8 col-span-12 row-span-1 text-justified">
        <Blurb techsFound={props.techsFound} />
      </div>
    </div>
  );
}

export default Home;
