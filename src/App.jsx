import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";
import AboutMe from "./pages/AboutMe.jsx";
export default function App() {
  return (
      <MainLayout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </MainLayout>
  )
}