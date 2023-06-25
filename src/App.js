import TechBtn from "./utils/TechBtn";
// import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./utils/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
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
        // console.log(shuffledTechnologies);
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
    techsFound.push(<TechBtn key={obj["Language"]} language={obj["Language"]} />);
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
      setWide(true);
    } else {
      setWide(false);
    }
  };

  return { wide, wideOnMouse };
}

function App() {
  const { technologies, techsFound } = useTechs();
  const { wide, wideOnMouse } = useNavbar();

  return (
    <div className="App flex flex-row overflow-hidden">
      <Navbar wide={wide} wideOnMouse={wideOnMouse} />
      <Routes>
        <Route
          path="/"
          element={<Home technologies={technologies} techsFound={techsFound} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
