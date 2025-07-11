"use client";
import { useState } from "react";
import NavigationBar from "../components/navigation/navigationBar";
import Footer from "../components/navigation/footer";
import ProjectCardBanner from "../components/projectCardBanner"
import projectData from "@/data/projects.json";

export default function Work() {
  const programmingProjects = projectData.programmingProjects;
  const designProjects = projectData.designProjects;

  const [activeCategory, setActiveCategory] = useState<"programming" | "design">("programming");
  const displayedProjects = activeCategory === "programming" ? programmingProjects : designProjects;


  return (
    <div className="min-h-screen py-8 px-12">
        <NavigationBar/>

      <div
        className="
          w-full 
          flex 
          flex-col
          gap-12
          justify-between 
          items-center
          pb-10
          px-12
        "
      >
        <section>
          
          <section className="flex gap-8 justify-center">
            <button 
              className={`hover:drop-shadow-[0_0_8px_currentColor] px-12 py-2 rounded-2xl ${
                activeCategory === "programming" ? "bg-current" : "bg-transparent"
              }`}
              style={{ boxShadow: "inset 0 0 0 3px currentColor" }}
              onClick={() => setActiveCategory("programming")}
            >
              <p 
                className={`text-2xl font-medium font-geist-mono text-[#FCFBF7] ${
                  activeCategory === "programming" ? "text-[#FCFBF7]" : "text-current"
                }`}
              >
                Programming</p>
            </button>
            <button 
              className={`hover:drop-shadow-[0_0_8px_currentColor] px-12 py-2 rounded-2xl ${
                activeCategory === "design" ? "bg-current" : "bg-transparent"
              }`}
              style={{ boxShadow: "inset 0 0 0 3px currentColor" }}
              onClick={() => setActiveCategory("design")}
            >
              <p 
                className={`text-2xl font-medium font-geist-mono text-[#FCFBF7] ${
                  activeCategory === "design" ? "text-[#FCFBF7]" : "text-current"
                }`}
              >
                Product Design</p>
            </button>
          </section>
        

          <div className="flex flex-col gap-8 w-[88vw] overflow-x-auto mt-5">
            {displayedProjects.map((project, index) => (
              <div 
                key={index} 
                className=""
              >
                <ProjectCardBanner
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </div>

        </section>
      </div>
      <Footer />
    </div>
  );
}