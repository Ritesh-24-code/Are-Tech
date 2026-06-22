import "./index.css";
import "animate.css";
import "barba.js";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
} from "react";

import Header from "./header.jsx";
import Hover from "./mouse_hover.jsx";
import Landing from "./landing_page.jsx";
import Glass_grid from "./glass_grid.jsx";
import Projects_gird from "./projects_grid.jsx";
import Skills from "./skills_bar.jsx";
import Service from "./services.jsx";
import Hr from "./hr.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import Projects_page from "./projects_page.jsx";
import About_me from "./about_me.jsx";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id =
        location.hash.replace("#", "");

      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 200);
    }
  }, [location]);

  return (
    <div className="bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:30px_30px]">

      <div className="max-md:grid max-md:justify-center max-md:items-center max-md:align-middle">

        <Header />

        <Hover />

<div id="hero">
        <Landing />

</div>
        <Hr />

        <Glass_grid />

        <Hr />

        <div className=" ">
          <Projects_gird />

        </div>
        <Hr />

        <div id="skills" className="flex justify-center items-center align-middle">
          <Skills />
        </div>

        <Hr />

        <div id="services">
          <Service />
        </div>

        <Hr />

        <div id="contact">
          <Contact />
        </div>

        <Hr />

        <Footer />

      </div>

    </div>
  );
};

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/projects"
        element={<Projects_page />}
      />

      <Route
        path="/about"
        element={<About_me />}
      />

    </Routes>
  );
}

