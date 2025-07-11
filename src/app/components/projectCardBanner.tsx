import DesktopThumbnail from "./desktopThumbnail";
import PhoneThumbnail from "./phoneThumbnail";
import { Project } from "@/types/project";

type ProjectCardBannerProps = {
  project: Project;
  index?: number;
};


export default function ProjectCardBanner({ project, index = 0 }: ProjectCardBannerProps) {
  const { name, overview, images, desktop} = project;
  const { start, end } = project.duration;
  
  return (
    // <div className="relative w-fit flex items-center py-4 mt-6"></div>
    <div className="relative w-fit h-[35vh] flex items-center py-4">
      {/* bg */}
      <div 
        className="absolute w-[88vw] h-[35vh] rounded-3xl z-0"  
        style={{
          backgroundColor: "currentColor",
          opacity: 0.4,
        }}
      />
      {desktop ? (
        <DesktopThumbnail image={images[0]}/>
      ) : (
        <PhoneThumbnail images={images} /> 
      )}

      {/* text content */}
      <div className="ml-5 w-fit">
        {/* project name */}
        <h3 className="text-4xl font-medium font-geist-mono">
          {String(index + 1).padStart(2, "0")} {name}
        </h3>
            
        {/* duration */}
        <h4 className="text-lg font-medium font-geist-mono">
          {start} - {end}
        </h4>
          
           {/* overview */}
        <p className="text-lg font-ibm-plex-sans text-[#261817]">
          {overview}
        </p>

        {/* btn */}
        <button className="bg-current mt-10 px-7 py-1 rounded-lg">
          <p className="text-lg font-medium font-geist-mono text-[#FCFBF7]">read more</p>
        </button>
      </div>
    </div>
  );
}

