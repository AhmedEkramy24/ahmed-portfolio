"use client";

import { useEffect, useState } from "react";
import AnimatedBar from "../_Components/AnimatedBar/AnimatedBar";
import Image from "next/image";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";
import Loading from "../loading";
import Card from "../_Components/Card/Card";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  async function getProjects() {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  if (!projects.length) {
    return <Loading />;
  }
  return (
    <>
      <AnimatedBar />
      <div className="text-white container mx-auto">
        <h1 className="text-center my-6 font-bold md:text-4xl text-xl">
          Some of my amazing projects ✨
        </h1>
        <AnimatedContent>
          <div className="flex flex-wrap items-center">
            {projects.map((item, index) => (
              <Card item={item} key={index} />
            ))}
            <div className="w-full p-3 md:w-1/2 lg:w-1/4">
              <a
                href="https://github.com/AhmedEkramy24"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group relative flex flex-col items-center justify-center rounded-xl bg-linear-to-b from-gray-900 to-black p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-6xl text-white transition-transform duration-300 group-hover:scale-110">
                    <FaGithub />
                  </div>
                  <h4 className="mt-4 text-center text-lg font-semibold text-gray-200 group-hover:text-white">
                    Show more on my GitHub 👉
                  </h4>

                  {/* optional subtle gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-t from-transparent via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </>
  );
}
