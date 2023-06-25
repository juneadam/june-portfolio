import DDDCarouCell from "./DDDCarouCell";
import "./DDDCarousel.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("PORTFOLIOPROJECTS.json");
        const projectsFetched = response.data.data;
        // console.log(projectsFetched);
        setProjects(projectsFetched);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return projects;
}

function DDDCarousel() {
  const projects = useProjects();

  const [selectedIndex, setSelectedIndex] = useState(0);

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  let cellSize = 360;
  let numberOfCells = projects.length;

  let tz = Math.round(cellSize / 2 / Math.tan(Math.PI / numberOfCells));
  // console.log(tz);

  let rotateCarousel = (currentIndex) => {
    let angle = (currentIndex / numberOfCells) * -360;
    document.querySelector(".carousel").style.transform =
      "rotateY(" + angle + "deg)";
  };

  const Prev = () => {
    let newIndex = selectedIndex - 1;
    setSelectedIndex(newIndex);
    rotateCarousel(newIndex);
  };

  const Next = () => {
    let newIndex = selectedIndex + 1;
    setSelectedIndex(newIndex);
    rotateCarousel(newIndex);
  };

  return (
    <>
      <div className="carousel col-span-1 w-auto h-auto relative flex flex-row justify-center items-center">
        {projects.map((project) => {
          return (
            <DDDCarouCell
              arrayLength={projects.length}
              selectedIndex={selectedIndex}
              cellIndex={project.key}
              key={project.key}
              image={project.image}
              title={project.title}
              content={project.content}
              github={project.github}
              githubIcon={project.githubIcon}
              deploy={project.deploy}
              deployIcon={project.deployIcon}
              demo={project.demo}
              demoIcon={project.demoIcon}
              etc={project.etc}
              etcLink={project.etcLink}
              etcIcon={project.etcIcon}
            />
          );
        })}
      </div>
      <div className="relative carousel-button-hole">
        <button className="absolute lg:right-96 right-40 md:right-72" onClick={Prev}>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-left"
            size="2xl"
            className="prevBtn rounded-full transition-all duration-700 hover:ease-in-out hover:shadow-hover-carousel-toggle hover:bg-carousel-toggle hover:text-teal-200 hover:scale-150"
          />
        </button>
        <button className="absolute lg:-right-96 -right-48 md:-right-80" onClick={Next}>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-right fa-pull-right"
            size="2xl"
            className="nextBtn rounded-full transition-all duration-700 hover:ease-in-out hover:shadow-hover-carousel-toggle hover:bg-carousel-toggle hover:text-teal-200 hover:scale-150"
          />
        </button>
      </div>
    </>
  );
}

export default DDDCarousel;
