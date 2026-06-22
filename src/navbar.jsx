import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/#hero" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

        <div className="h-[70px] sm:h-[80px] flex items-center justify-end max-md:-translate-x-10">

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">

            {links.map((item) => (
              <li
                key={item.name}
                className="group"
              >

                <NavLink
                  to={item.path}
                  className="
                    relative
                    inline-block
                    text-white
                    text-[1rem]
                    font-medium
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >

                  {item.name}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      bg-cyan-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                </NavLink>

              </li>
            ))}

          </ul>

          {/* Mobile */}
          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              max-md:-translate-y-10
              lg:hidden
              text-white
              z-[100]
              transition
              duration-300
              active:scale-150
            "
          >

            <div
              className={`
                transition-all
                duration-300
                ${open ? "rotate-180" : ""}
              `}
            >
              {open ? (
                <HiX size={34} />
              ) : (
                <HiMenu size={34} />
              )}
            </div>

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
       
lg:hidden
absolute
top-16
right-0
w-fit
bg
rounded-2xl
py-5
shadow-xl
transition-all
duration-500
z-50


          ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >

        <ul className="flex flex-col items-center gap-8 max-sm:gap-5">

          {links.map((item) => (
            <li key={item.name}>

              <NavLink
                to={item.path}
                onClick={() =>
                  setOpen(false)
                }
                className="
                  text-white
                  text-[1rem]
                  font-semibold
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  px-20 py-2
                "
              >
                {item.name}
              </NavLink>

            </li>
          ))}

        </ul>

      </div>

    </nav>
  );
}

