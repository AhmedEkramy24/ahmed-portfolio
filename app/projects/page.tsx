"use client";

import { useEffect, useState } from "react";
import AnimatedBar from "../_Components/AnimatedBar/AnimatedBar";
import Image from "next/image";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";
import Loading from "../loading";
import Card from "../_Components/Card/Card";

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
          <div className="flex flex-wrap ">
            {projects.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </AnimatedContent>
      </div>
    </>
  );
}
