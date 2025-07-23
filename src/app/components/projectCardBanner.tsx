import Link from "next/link";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import { Project } from "@/types/project";

type ProjectCardBannerProps = {
  project: Project;
  index?: number;
};

export default function ProjectCardBanner({ project, index = 0 }: ProjectCardBannerProps) {
  const { name, webpage, overview, images, desktop} = project;
  const { start, end } = project.duration;

  function formatDate(dateStr: string) {
    const [month, year] = dateStr.split(" ");
    const shortMonth = month.slice(0, 3)
    return `${shortMonth} ${year}`;
  }
  
  return (
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
      <div className="ml-5 w-fit z-10">
        {/* project name */}
        <h3 className="text-4xl font-medium font-geist-mono">
          {String(index + 1).padStart(2, "0")} {name}
        </h3>
            
        {/* duration */}
        <h4 className="text-lg font-medium font-geist-mono">
          {formatDate(start)} - {formatDate(end)}
        </h4>
          
           {/* overview */}
        <p className="text-lg font-ibm-plex-sans text-[#261817]">
          {overview}
        </p>

        {/* btn */}
        <Link href={`/work/${webpage}`}>
          <button className="hover:drop-shadow-[0_0_8px_currentColor] bg-current mt-10 px-7 py-1 rounded-lg">
            <p className="text-lg font-medium font-geist-mono text-[#FCFBF7]">read more</p>
          </button>
        </Link>

      </div>
    </div>
  );
}

