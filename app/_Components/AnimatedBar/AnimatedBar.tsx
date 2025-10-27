"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { FaJsSquare, FaHtml5, FaCss3, FaGitAlt, FaNode } from "react-icons/fa";

import LogoLoop from "../ReactBits/LogoLoop";

const techLogos = [
  { node: <SiReact /> },
  { node: <SiNextdotjs /> },
  {
    node: <SiTypescript />,
  },
  {
    node: <SiTailwindcss />,
  },
  {
    node: <SiBootstrap />,
  },
  {
    node: <FaJsSquare />,
  },
  {
    node: <FaHtml5 />,
  },
  {
    node: <FaCss3 />,
  },
  {
    node: <FaGitAlt />,
  },
  {
    node: <FaNode />,
  },
  {
    node: <FaHtml5 />,
  },
];

export default function AnimatedBar() {
  return (
    <div
      style={{ height: "auto", position: "relative", overflow: "hidden" }}
      className="text-white"
    >
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={30}
        gap={20}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="transparet"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
