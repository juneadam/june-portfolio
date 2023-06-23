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
        <h1 className="text-slate-300 text-6xl font-bold">June Balter</h1>
        <h2 className="text-slate-300 text-2xl font-bold">
          Full Stack Software Engineer
        </h2>
      </div>
      <div className="home-portrait-hole col-span-4 row-span-1 grid justify-items-center place-items-center">
        <Portrait image="aiony-haust-3TLl_97HNJo-unsplash.jpg" />
      </div>
      <div className="top-right-left col-span-2 grid justify-items-center place-items-center">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line className="animated-line" x1="60" y1="0" x2="60" y2="100" stroke="rgb(217 249 157)"stroke-width="2" />
        </svg>
      </div>

{/* Bottom Row */}

      <div className="bottom-left-corner col-span-3 row-span-1 grid justify-items-center place-items-center">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line className="animated-line" x1="40" y1="0" x2="40" y2="100" stroke="rgb(217 249 157)" stroke-width="2" />
        </svg>
      </div>
      <div className="col-span-1"></div>
      <div className="home-blurb-hole grid max-h-full col-span-8 row-span-1 text-justified">
        <Blurb />
      </div>


    </div>
  );
}

export default Home;
