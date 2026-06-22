import React from "react";
import profileImg from "./assets/5.png";

import Header from "./header.jsx";
import Hover from "./mouse_hover.jsx";
import Footer from "./footer.jsx";
import Hr from "./hr.jsx";

import "./index.css";
import "./ai.css";

import { motion } from "framer-motion";

const checklist = [
  "Clean Code",
  "Pixel Perfect Design",
  "Responsive Layouts",
  "Performance Focused",
];

function CheckItem({ text }) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="flex items-center gap-2.5  "
    >
      <motion.span
        whileHover={{
          rotate: 360,
          scale: 1.15,
        }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 shrink-0"
      >
        ✓
      </motion.span>

      <span className="text-gray-200 text-sm sm:text-base">
        {text}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <div>

      <Header />
      <Hover />

      <motion.section
        id="about"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative w-full overflow-hidden text-white py-20 sm:py-24 scroll-mt-24 my-10"
      >

        {/* Glow */}
        <div className="absolute top-1/4 left-[-10%] w-[24rem] h-[24rem] bg-purple-600/20 rounded-full blur-[100px]" />

        <div className="absolute bottom-0 right-[-10%] w-[20rem] h-[20rem] bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="flex justify-center lg:justify-start"
            >

              <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] -translate-y-4 sm:-translate-y-6">

                {/* GLOW DOTS */}
                <div className="hidden sm:flex flex-col gap-4 absolute -left-8 top-6 z-20">

                  {[0, 1, 2, 3].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.4, 1],
                        boxShadow: [
                          "0 0 0px #9333ea",
                          "0 0 18px #06b6d4",
                          "0 0 0px #9333ea",
                        ],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                      className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400"
                    />
                  ))}

                </div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="relative rounded-2xl p-[2px] bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-900/30"
                >

                  <div className="rounded-2xl overflow-hidden bg-gray-900 aspect-[3/4]">

                    <motion.img
                      src={profileImg}
                      alt="profile"
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="w-full h-full object-cover"
                    />

                  </div>

                </motion.div>

                {/* EXPERIENCE */}
                <div
                  className="
                  absolute
                  -bottom-6
                  -left-6
                  sm:-left-8

                  w-[130px]
                  h-[130px]

                  rounded-2xl
                  overflow-hidden

                  bg-gradient-to-br
                  from-purple-600
                  to-blue-500

                  flex
                  flex-col
                  justify-center
                  items-center

                  z-20
                "
                >

                  <span className="text-4xl font-black relative z-20">
                    3+
                  </span>

                  <span className="text-sm text-center relative z-20">
                    Years
                    <br />
                    Experience
                  </span>

                </div>

              </div>

            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-center lg:text-left"
            >

              <p className="flex justify-center lg:justify-start gap-1">

                <span>/</span>

                <span className="name">
                  About
                </span>

                <span className="name text-cyan-400">
                  Me
                </span>

              </p>

              <h2 className="mt-4 text-4xl font-black">
                Frontend Developer
                <br />
                From India
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                I'm Ritesh, a passionate frontend developer and founder of
                <span className="name">
                  {" "}Are_Tech
                </span>
                . I build responsive modern web experiences.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                {checklist.map((item) => (
                  <CheckItem
                    key={item}
                    text={item}
                  />
                ))}

              </div>

              <motion.a
                href="https://github.com/Ritesh-24-code"
                download

                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                inline-flex
                mt-8
                px-7
                py-3

                rounded-xl

                bg-gradient-to-r
                from-purple-500
                to-blue-500
              "
              >
                Go To My Git Hub
              </motion.a>

            </motion.div>

          </div>

        </div>

      </motion.section>

      <Hr />
      <Footer />

    </div>
  );
}
