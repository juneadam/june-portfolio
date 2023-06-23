import Accordion from "../utils/Accordion";
import Portrait from "../utils/Portrait";
import Blurb from "../utils/Blurb";
import "./Home.css";

function Home(props) {
  return (
    <div className="Home w-screen h-screen grid grid-cols-12 grid-rows-2">
      <div className="home-portrait-hole col-span-6 row-span-1 grid justify-items-center place-items-center">
        <Portrait image="aiony-haust-3TLl_97HNJo-unsplash.jpg" />
      </div>
      <div className="home-name-hole grid justify-end content-center col-span-5 row-span-1 text-right">
        <h1 className="text-slate-300 text-6xl font-bold">June Balter</h1>
        <h2 className="text-slate-300 text-2xl font-bold">Full Stack Software Engineer</h2>
      </div>
      <div className="top-right-corner col-span-1"></div>
      <div className="bottom-left-corner min-w-max min-h-max col-span-4 row-span-1">
        corner
      </div>
      <div className="home-blurb-hole grid max-h-full col-span-8 row-span-1">
        <Blurb />
      </div>
    </div>
  );
}

export default Home;
