import TechBtn from "./utils/TechBtn";
import Accordion from "./utils/Accordion";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./utils/Navbar";

function useTechs() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get("TECHNOLOGIES.json");
        const technologiesFetched = response.data.data;
        console.log(technologiesFetched);
        const shuffledTechnologies = [...technologiesFetched].sort(
          () => Math.random() - 0.5
        );
        console.log(shuffledTechnologies);
        setTechnologies(shuffledTechnologies);
        console.log(technologies);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchTechnologies();
    console.log(technologies);
  }, []);

  const techsFound = [];
  for (const obj of technologies) {
    console.log(`technologies key: ${obj["Language"]}`);
    techsFound.push(<TechBtn language={obj["Language"]} />);
  }

  return {
    technologies,
    techsFound,
  };
}

function useNavbar() {
  const [wide, setWide] = useState(false);

  const wideOnClick = () => {
    if (wide === false) {
      setWide(true)
    } else {
      setWide(false)
    }
  }

  return {wide, wideOnClick}

}

function App() {
  const { technologies, techsFound } = useTechs();
  const {wide, wideOnClick} = useNavbar();

  return (
    <div className="App flex flex-row">
      <Navbar wide={wide} wideOnClick={wideOnClick} />
      <div className="content">
        <div className="technologies-hole">
          {technologies.length > 0 ? (
            <Accordion accordionData={["Technologies", techsFound]} />
          ) : (
            <p>No technologies found.</p>
          )}
          </div>
      </div>
    </div>
  );
}

export default App;
