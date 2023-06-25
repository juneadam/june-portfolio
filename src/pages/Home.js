import Accordion from "../utils/Accordion";
import Portrait from "../utils/Portrait";
import Blurb from "../utils/Blurb";
import "./Home.css";

function Home(props) {
  return (
    <div className="Home w-screen h-screen grid grid-cols-12 grid-rows-2">
      {/* Top Row   */}

      <div className="top-right-left col-span-1"></div>
      <div className="home-name-hole grid justify-start content-center col-span-5 row-span-1">
        <h1 className="text-slate-300 text-6xl lg:text-7xl xl:text-8xl font-bold">June Balter</h1>
        <h2 className="text-slate-300 text-2xl lg:text-3xl xl:text-4xl font-bold">
          Full Stack Software Engineer
        </h2>
      </div>
      <div className="home-portrait-hole col-span-4 row-span-1 grid justify-items-center place-items-center">
        <Portrait image="june3.jpg" />
      </div>
      <div className="top-right-left col-span-2 grid justify-items-center place-items-center">
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

      <div className="bottom-left-corner col-span-3 row-span-1 grid justify-items-center place-items-center">
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
      <div className="col-span-1"></div>
      <div className="home-blurb-hole grid max-h-full col-span-8 row-span-1 text-justified">
        <Blurb techsFound={props.techsFound} />
      </div>
    </div>
  );
}

export default Home;
