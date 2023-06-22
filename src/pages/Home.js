import Accordion from "../utils/Accordion";
import Portrait from "../utils/Portrait";
import "./Home.css";

function Home(props) {
  return (
    <div className="Home w-screen h-screen grid grid-cols-3 grid-rows-2">
      <div className="home-picture-hole col-span-2 row-span-1 grid justify-items-center place-items-center">
        <Portrait image="aiony-haust-3TLl_97HNJo-unsplash.jpg" />
      </div>
      <div className="top-right-corner min-w-max min-h-max col-span-1 row-span-1">
        corner
      </div>
      <div className="bottom-left-corner min-w-max min-h-max col-span-1 row-span-1">
        corner
      </div>
      <div className="home-blurb-hole min-w-max min-h-max col-span-2 row-span-1">
        blurb
      </div>
    </div>
  );
}

export default Home;
