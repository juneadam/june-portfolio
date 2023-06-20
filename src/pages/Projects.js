import "./Projects.css";
import DDDCarousel from "../utils/DDDCarousel";

function Projects() {
  return (
    <div className="Projects w-screen h-screen flex flex-auto justify-center place-items-center">
      {/* <div className="w-80 h-80 flex items-center object-center overflow-hidden">
        <img className="object-cover" src="aiony-haust-3TLl_97HNJo-unsplash.jpg"></img>
      </div> */}
      <DDDCarousel />
    </div>
  );
}

export default Projects;
