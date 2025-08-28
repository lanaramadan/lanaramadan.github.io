import Link from "next/link";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import { Project } from "@/types/project";

type ProjectCardBannerProps = {
  project: Project;
  index?: number | null;
};

export default function ProjectCardBanner({
  project,
  index = 0,
}: ProjectCardBannerProps) {
  const { name, webpage, overview, images, desktop } = project;
  const { start, end } = project.duration;

  function formatDate(dateStr: string) {
    const [month, year] = dateStr.split(" ");
    const shortMonth = month.slice(0, 3);
    return `${shortMonth} ${year}`;
  }

  return (
    <div className="relative w-full h-[26.5vh] flex gap-6">
      {/* image */}
      <Link href={`/work/${webpage}`}>
        <div className="w-[23em] flex justify-center items-center">
          {desktop ? (
            <DesktopThumbnail image={images[0]} />
          ) : (
            <PhoneThumbnail images={images} width={100} height={200} />
          )}
        </div>
      </Link>

      {/* text content */}
        <div
          className="h-full w-full z-10 px-8 rounded-3xl flex flex-col justify-center"
          style={{
            backgroundColor: "rgba(252, 251, 247, 0.3)"
          }}
        >
          
          {/* project name */}
          <Link href={`/work/${webpage}`}>
          <h3 className="text-4xl font-medium font-geist-mono">
            {index !== null ? `${String(index + 1).padStart(2, "0")} ` : ""}
            {name}
          </h3>
          </Link>

          {/* duration */}
          <h4 className="text-lg font-medium font-geist-mono">
            {start === end
              ? `${formatDate(start)} - Hackathon`
              : `${formatDate(start)} - ${formatDate(end)}`}
          </h4>

          {/* overview */}
          <p className="text-lg font-ibm-plex-sans text-[#261817]">
            {overview}
          </p>

          {/* btn */}
          <Link href={`/work/${webpage}`}>
          <button className="w-fit hover:drop-shadow-[0_0_8px_currentColor] bg-current mt-10 px-7 py-1 rounded-lg inline-flex">
            <p className="text-lg font-medium font-geist-mono text-[#FCFBF7]">
              read more
            </p>
          </button>
          </Link>
        </div>
      
    </div>
  );
}
