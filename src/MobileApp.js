import MobileNavbar from "./utils/MobileNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MobileResume from "./pages/MobileResume";
import Contact from "./pages/Contact";

function MobileApp() {
    return (
        <div className="MobileApp flex flex-col-reverse">
          <MobileNavbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<MobileResume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      );
    }

export default MobileApp;