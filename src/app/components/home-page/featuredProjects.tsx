import Link from "next/link";

import ProjectCardBanner from "../projectCardBanner";
import CurvedLine from "../curvedLine";
import projectData from "@/data/projects.json";
import PencilUpIcon from "../icons/pencilUpIcon";

import { Project } from "@/types/project";

export default function FeaturedProjects() {
  const featuredProjects: Project[] = [
    projectData.designProjects.find((p) => p.name === "GEM"),
    projectData.designProjects.find((p) => p.name === "Dino Docs"),
    projectData.programmingProjects.find((p) => p.name === "HomeMapper"),
  ].filter(Boolean) as Project[];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center pb-6">
        <h2
          className="
        font-medium
        text-xl
        sm:text-5xl
        font-[family-name:var(--font-new-spirit-condensed)]
      "
        >
          Selected Projects
        </h2>
        <CurvedLine />
      </div>

      <div className="flex flex-col gap-8 w-[88vw] mt-5">
        {featuredProjects.map((project, index) => (
          <div key={index} className="w-full overflow-hidden">
            <ProjectCardBanner project={project} index={null} />
          </div>
        ))}
      </div>

      <div className="flex items-center relative mt-8">
        <div className="absolute left-[-1.7em] top-6">
          <PencilUpIcon />
        </div>
        <div>
          <Link href="/work" className="text-2xl font-geist-mono underline">
            VIEW ALL MY PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}
