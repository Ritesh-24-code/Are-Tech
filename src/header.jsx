import "./index.css";
import "./ai.css";
import "animate.css";
import "barba.js";

import React, {
  useEffect,
  useState,
} from "react";

import Name from "./name.jsx";
import Navbar from "./navbar.jsx";

const Header = () => {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-[999]
        w-full

        transition-all
        duration-500
        

        ${
          scrolled
            ? `
              bg-black/40
              backdrop-blur-xl
              border-b
              border-white/10
              shadow-[0_8px_40px_rgba(0,0,0,.25)]
              py-2
            `
            : `
              bg-transparent
              py-4
            `
        }
      `}
    >

      <div
        className="
          flex
          justify-between
          max-md:justify-evenly
          items-center
          px-10
          max-md:px-0
          animate__animated
          animate__fadeInDown
        "
      >

        <Name />

        <div className="max-md:translate-x-20 max-sm:translate-x-10">
          <Navbar />
        </div>

      </div>

    </header>
  );
};

export default Header;
