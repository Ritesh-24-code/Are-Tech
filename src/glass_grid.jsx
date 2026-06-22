
import React from "react";
import "./ai.css";
import "./index.css";
import "animate.css";
import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    title: "Projects",
    sub: "Completed",
  },
  {
    number: "2+",
    title: "Happy",
    sub: "Clients",
  },
  {
    number: "3+",
    title: "Years",
    sub: "Experience",
  },
  {
    number: "100%",
    title: "Client",
    sub: "Satisfaction",
  },
];

const GlassGrid = () => {
  return (
    <section className="w-full  overflow-hidden">

      <div
        className="
        max-w-7xl
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        place-items-center
        px-6
      "
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="group"
          >
            <div
              className="
              glass-card
              relative
              overflow-hidden
              w-[260px]
              h-[220px]
              rounded-3xl
              grid
              place-items-center
              text-center
              backdrop-blur-xl
              border
              border-white/10
              transition-all
              duration-500
              hover:border-cyan-400/50
              hover:shadow-[0_0_60px_rgba(0,255,255,.18)]
            "
            >
              {/* glow */}
              <div
                className="
                absolute
                w-40
                h-40
                bg-cyan-500/10
                blur-3xl
                rounded-full
                group-hover:scale-150
                duration-700
              "
              />

              <motion.span
                whileHover={{
                  scale: 1.15,
                }}
                className="
                relative
                text-[3rem]
                font-black
                name
              "
              >
                {item.number}
              </motion.span>

              <div className="relative">
                <span
                  className="
                  text-white
                  font-semibold
                  tracking-widest
                  text-xl
                "
                >
                  {item.title}
                </span>

                <br />

                <span className="text-gray-300">
                  {item.sub}
                </span>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GlassGrid;