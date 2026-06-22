import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import profile from "./assets/1.png";

export default function HeroCircle() {
  return (
    <div className="relative min-h-fit w-full flex items-center justify-center px-4 max-md:w-[100vw] max-md:-translate-x-5   ">

      <div className="relative">

        {/* Glow */}
        <div
          className="
            absolute  inset-0
            rounded-full
            blur-[120px]
            bg-gradient-to-r
            from-cyan-500
            via-purple-500
            to-pink-500
            opacity-70
            animate-pulse
          "
        />

        {/* Ring */}
        <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">

          <div className="rounded-3xl overflow-hidden bg-[#050816]">
<img
  src={profile}
  alt="Profile"
  className="
 hover:scale-105 transition-all duration-550    object-contain
    w-[clamp(270px,40vw,350px)]
      h-[clamp(270px,40vw,500px)]
  "
/>
          </div>
        </div>

        {/* Floating Icons */}

        <SkillIcon
          icon={<FaHtml5 />}
          color="#E34F26"
          style={{
            top: "20%",
            left: "-8%",
          }}
        />

        <SkillIcon
          icon={<FaCss3Alt />}
          color="#1572B6"
          style={{
            top: "28%",
            right: "-14%",
          }}
        />

        <SkillIcon
          icon={<SiTailwindcss />}
          color="#06B6D4"
          style={{
            bottom: "20%",
            left: "-14%",
          }}
        />

        <SkillIcon
          icon={<FaJs />}
          color="#F7DF1E"
          style={{
            bottom: "10%",
            right: "-5%",
          }}
        />

        <SkillIcon
          icon={<FaReact />}
          color="#61DAFB"
          style={{
            bottom: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </div>
  );
}

function SkillIcon({ icon, color, style }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        zIndex: 20,
        ...style,
      }
}
    >
      <div
        style={{
          width: "clamp(44px, 7vw, 82px)",
          height: "clamp(44px, 7vw, 82px)",
        }}
        className="
          rounded-2xl
          bg-[#0c1020]
          border
          border-white/10
          shadow-xl
          flex
          items-center
          justify-center
          backdrop-blur
        "
      >
        <span
          style={{
            color,
            fontSize: "clamp(25px,8vw,44px)",
            display: "flex",
            lineHeight: 1,
          }}
        >
          {icon}
        </span>
      </div>
    </motion.div>
  );
}
