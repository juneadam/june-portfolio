import DDDCarouselCell from "./DDDCarouselCell";
import "./DDDCarousel.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
  for (const pro of projects) {
    console.log(`key: ${pro.key} image: ${pro.image} title: ${pro.title} content: ${pro.content}`)
  }

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  const ProjectCards = projects.map((project) => {
    return (
      <DDDCarouselCell
        key={project.key}
        image={project.image}
        title={project.title}
        content={project.content}
      />
    );
  });

  for (const card of ProjectCards) {
    console.log(`content: ${card}`)
  }

  return <div className="carousel w-auto h-auto relative">{ProjectCards}</div>;
}

export default DDDCarousel;
