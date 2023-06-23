import Accordion from "../utils/Accordion";
import Portrait from "../utils/Portrait";
import Blurb from "../utils/Blurb";
import "./Home.css";

function Home(props) {
  return (
    <div className="Home w-screen h-screen grid grid-cols-4 grid-rows-2">
      <div className="home-portrait-hole col-span-2 row-span-1 grid justify-items-center place-items-center">
        <Portrait image="aiony-haust-3TLl_97HNJo-unsplash.jpg" />
      </div>
      <div className="top-right-corner grid justify-start content-center col-span-2 row-span-1">
        <h1 className="text-slate-300 text-6xl font-bold">June Balter</h1>
        <h2 className="text-slate-300 text-2xl font-bold">Full Stack Software Engineer</h2>
      </div>
      <div className="bottom-left-corner min-w-max min-h-max col-span-1 row-span-1">
        corner
      </div>
      <div className="home-blurb-hole grid max-h-full col-span-3 row-span-1">
        <Blurb />
      </div>
    </div>
  );
}

export default Home;
