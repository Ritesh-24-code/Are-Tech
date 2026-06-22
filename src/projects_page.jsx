import React from "react";
import "./index.css";
import "./ai.css";
import "animate.css";

import Header from "./header";
import Hover from "./mouse_hover";
import Footer from "./footer";

import Gym from "./assets/gym.JPG"
import Bank from "./assets/banking.JPG"
import Shop from "./assets/e_commerce.JPG"
import School from "./assets/school.JPG"
import Zormia from "./assets/production.JPG"
import Snap from "./assets/snap.JPG"

const ProjectsPage = () => {

  const projects = [
    {
      title: "GYM WEBSITE",
      tech: "REACT JS• Tailwind ",
      link: "https://levelupfitnessspotgym.vercel.app/",
      image: Gym
    },
    {
      title: "BANKING FIRM",
      tech: "HTML • Tailwind • JavaScript",
      link: "https://digital-banking-zeta.vercel.app/",
      image: Bank
    },
    {
      title: "HIGH SCHOOL",
      tech: "REACT JS • Tailwind ",
      link: "https://high-school-irg9.vercel.app/",
      image: School
    },
    {
      title: "E-COMMERCE WEBSITE",
      tech: "HTML • Tailwind • JavaScript",
      link: "https://shopkart-brown.vercel.app/",
      image: Shop
    },
    {
      title: "CLOTHING BRAND",
      tech: "HTML • Tailwind CSS • JvavScript",
      link: "https://zormia-style.vercel.app/",
      image: Zormia
    },
    {
      title: "PORTFOLIO WEBSITE",
      tech: "HTML • CSS • JS",
      link: "https://snap-firm.vercel.app/",
      image: Snap
    }
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:30px_30px]">

      <Header />
      <Hover />

      <div className="grid gap-14 my-30">

        {/* Heading */}
        <div className="grid justify-center text-center gap-2">

          <span
            className="
              text-[2rem]
              name
              text-white
              font-semibold
              tracking-wider
              animate__animated
              animate__fadeInDown
            "
          >
            My Projects
          </span>

          <span
            className="
              text-gray-300
              animate__animated
              animate__fadeInUp
            "
          >
            Some of my best work
          </span>

        </div>

        {/* Projects Grid */}
        <div
          className="
            grid
            grid-cols-3
            max-xl:grid-cols-2
            max-md:grid-cols-1
            gap-10
            justify-items-center
            px-4
          "
        >
          {projects.map((project, i) => (

            <div
              key={i}
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
              className="
                project
                animate__animated
                animate__fadeInUp

                border-4
                border-gray-500

                bg-[#020818]

                rounded-2xl
                p-2

                hover:scale-105
                transition-all
                duration-300

                w-[370px]
                max-sm:w-[95vw]
              "
            >

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="grid gap-4"
              >

                {/* Image */}
                <div className="rounded-2xl border border-gray-500 p-2">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
    w-full
    h-[220px]
    object-cover
    rounded-2xl
    transition-all
    duration-300
    hover:scale-105
  "
                  />

                </div>

                {/* Text */}
                <div className="grid gap-1 px-2 pb-2">

                  <span className="text-white text-[1.1rem] font-bold">
                    {project.title}
                  </span>

                  <span className="text-gray-400 text-[0.9rem]">
                    {project.tech}
                  </span>

                </div>

              </a>

            </div>

          ))}
        </div>

      </div>
      <Hr/>
      <Footer/>
    </div>
  );
};

export default ProjectsPage;

