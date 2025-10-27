"use client";

import { useEffect, useState } from "react";
import AnimatedBar from "../_Components/AnimatedBar/AnimatedBar";
import Image from "next/image";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";

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
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <AnimatedBar />
      <div className="text-white container mx-auto">
        <h1 className="text-center my-6 font-bold md:text-4xl text-2xl">
          Some of my amazing projects ✨
        </h1>
        <AnimatedContent>
          <div className="flex flex-wrap ">
            {projects.map((item) => (
              <div className="md:w-1/2 lg:w-1/4 w-full p-3 ">
                <a href={item.link}>
                  <div className="rounded-2xl overflow-hidden bg-[rgba(0,0,0,0.6)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={300}
                      width={300}
                      className="w-full"
                    />
                    <h4 className="p-3 text-lg font-semibold">{item.title}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </>
  );
}
