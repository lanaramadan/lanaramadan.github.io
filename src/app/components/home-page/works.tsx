import projectData from "@/data/projects.json";
import CurvedLine from "../curvedLine";
import ProjectCard from "./projectCard";

export default function Works() {
  return (
    <section id="work">
      <div className="sticky top-0 overflow-hidden flex flex-col bg-light h-screen w-full px-48 py-10 gap-6">
        <div className="flex flex-col items-center text-dark">
          <h2
            className="
            font-medium
            text-xl
            sm:text-8xl
            font-imperial-script
          "
          >
            works
          </h2>
          <CurvedLine width="180" stroke="8" className="-mt-4" />
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-12 w-full">
          {projectData.designProjects.map((project, index) => (
            <div key={index} className="w-full overflow-hidden">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
