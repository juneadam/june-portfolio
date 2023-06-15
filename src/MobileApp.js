import MobileNavbar from "./utils/MobileNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
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
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      );
    }

export default MobileApp;