"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { node: <SiReact />, d: 90, title: "React.js", color: "#58C4DC" },
  { node: <SiNextdotjs />, d: 85, title: "Next.js", color: "#D6D6D6" },
  { node: <FaJsSquare />, d: 90, title: "JavaScript", color: "#F7E018" },
  { node: <FaNode />, d: 75, title: "Node.js", color: "#84BF09" },
  { node: <SiTypescript />, d: 80, title: "TypeScript", color: "#2F74C0" },
  { node: <FaHtml5 />, d: 95, title: "HTML5", color: "#E5532D" },
  { node: <FaCss3 />, d: 95, title: "CSS3", color: "#2D53E5" },
  { node: <SiBootstrap />, d: 95, title: "Bootstrap", color: "#8E1AFB" },
  { node: <SiTailwindcss />, d: 95, title: "Tailwind CSS", color: "#3EBFF8" },
  { node: <FaGitAlt />, d: 80, title: "Git", color: "#F05639" },
  { node: <FaGithub />, d: 90, title: "GitHub", color: "#fff" },
];

export default function Skills() {
  return (
    <section className="text-white container mx-auto px-4">
      <h1 className="text-center my-5 font-bold md:text-4xl text-2xl">
        My Tech Skills 🛠
      </h1>

      <div className="flex flex-wrap">
        {skills.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-6"
          >
            <div className="bg-[#0F0F0F] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="flex gap-2 items-center mb-3 text-xl font-semibold">
                <span className="text-3xl" style={{ color: item.color }}>
                  {item.node}
                </span>
                {item.title}
              </h4>

              <div className="w-full h-3 bg-slate-700 rounded relative overflow-hidden">
                <motion.div
                  className="h-full rounded-sm"
                  style={{
                    background: item.color,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.d}%` }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                ></motion.div>

                <motion.span
                  className="absolute px-2 py-px text-xs bg-white text-black rounded font-semibold -bottom-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  style={{
                    left: `calc(${item.d}% - 20px)`,
                  }}
                >
                  {item.d}%
                </motion.span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
