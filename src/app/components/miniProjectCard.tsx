import Image from "next/image";

import ProjectThumbnail from "./projectThumbnail";

type MiniProjectCardProps = {
  project: {
    name: string;
    overview: string;
    description?: string;
    tools: string[];
    links: string[];
    duration: {
      start: string;
      end: string;
    };
    images: string[];
    desktop: boolean;
  };
  workPage?: boolean;
  index?: number;
};


export default function MiniProjectCard({ project, workPage = false, index = 0 }: MiniProjectCardProps) {
  const { name, overview, tools, links, images, desktop} = project;
  const { start, end } = project.duration;
  
  return (
    <div className="h-64 flex gap-6">
        <ProjectThumbnail desktop={desktop} images={images}/>
        
        {/* text content */}
        { workPage && 
          <div className="w-72">
            {/* project name */}
            <h3 className="text-2xl font-medium font-[family-name:var(--font-geist-mono)]">
              {String(index + 1).padStart(2, "0")} {name}
            </h3>
            
            {/* duration */}
            <h4 className="text-sm font-medium font-[family-name:var(--font-geist-mono)]">
              {start} - {end}
            </h4>
            
            {/* overview */}
            <p className="text-sm font-[family-name:var(--font-ibm-plex-sans)] text-[#261817]">
              {overview}
            </p>

            {/* btn */}
            <button className="bg-current mt-5 px-7 py-1">
              <p className="text-sm font-medium font-[family-name:var(--font-geist-mono)] text-[#FCFBF7]">read more</p>
            </button>

          </div>
        }
    </div>
  );
}

