import TechBtn from "./utils/TechBtn";
import Accordion from "./utils/Accordion";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./utils/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


function useTechs() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get("TECHNOLOGIES.json");
        const technologiesFetched = response.data.data;
        // console.log(technologiesFetched);
        const shuffledTechnologies = [...technologiesFetched].sort(
          () => Math.random() - 0.5
        );
        console.log(shuffledTechnologies);
        setTechnologies(shuffledTechnologies);
        // console.log(technologies);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchTechnologies();
    // console.log(technologies);
  }, []);

  const techsFound = [];
  for (const obj of technologies) {
    // console.log(`technologies key: ${obj["Language"]}`);
    techsFound.push(<TechBtn language={obj["Language"]} />);
  }

  return {
    technologies,
    techsFound,
  };
}

function useNavbar() {
  const [wide, setWide] = useState(false);

  const wideOnMouse = () => {
    if (wide === false) {
      setWide(true)
    } else {
      setWide(false)
    }
  }

  return {wide, wideOnMouse}

}

function App() {
  const { technologies, techsFound } = useTechs();
  const {wide, wideOnMouse} = useNavbar();

  return (
    <div className="App flex flex-row">
      <Navbar wide={wide} wideOnMouse={wideOnMouse} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
