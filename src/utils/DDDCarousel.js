import DDDCarouCell from "./DDDCarouCell";
import "./DDDCarousel.scss";
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
        console.log(projectsFetched);
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

  for (const pro of projects) {
    console.log(
      `key: ${pro.key} image: ${pro.image} title: ${pro.title} content: ${pro.content}`
    );
  }

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  let cellSize = 360;
  let numberOfCells = projects.length;

  let tz = Math.round(cellSize / 2 / Math.tan(Math.PI / numberOfCells));
  console.log(tz);

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
              key={project.key}
              image={project.image}
              title={project.title}
              content={project.content}
            />
          );
        })}
      </div>
      <div className="relative carousel-button-hole">
        <button className="absolute right-96" onClick={Prev}>
          <FontAwesomeIcon icon="fa-solid fa-circle-left" size="2xl" className="prevBtn transition-all hover:ease-in-out duration-700 hover:shadow-hover-card" />
        </button>
        <button className="absolute -right-96" onClick={Next}>
          <FontAwesomeIcon icon="fa-solid fa-circle-right fa-pull-right" size="2xl" className="nextBtn transition-all rounded-full hover:ease-in-out duration-300 bg-clip-text hover:text-transparent hover:shadow-hover-carousel-toggle" />
        </button>
      </div>
    </>
  );
}

export default DDDCarousel;
