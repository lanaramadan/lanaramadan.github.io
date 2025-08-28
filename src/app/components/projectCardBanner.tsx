"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import { Project } from "@/types/project";
import StarIcon from "@/app/components/icons/starIcon";

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
  const [hovered, setHovered] = useState(false);

  function formatDate(dateStr: string) {
    const [month, year] = dateStr.split(" ");
    const shortMonth = month.slice(0, 3);
    return `${shortMonth} ${year}`;
  }

  return (
    <div
      className="relative w-full h-[62vh] sm:h-[30.5vh] py-4 flex-col sm:flex-row flex gap-6 hover:drop-shadow-[0_0_8px_currentColor] items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* image */}
      <Link href={`/work/${webpage}`}>
        <div className="w-[23em] flex justify-center items-center">
          {desktop ? (
            <DesktopThumbnail image={images[0]} scale={0.95} />
          ) : (
            <PhoneThumbnail images={images} width={100} height={200} />
          )}
        </div>

        {/* stars on hover - mobile */}
        {hovered && !desktop && (
          <>
            <StarIcon className="absolute top-[0.35vh] left-[6vw] z-10" />
            <StarIcon className="absolute top-[1vh] left-[16vw] z-10" />
            <StarIcon className="absolute bottom-[4vh] left-[0vw] z-10" />
            <StarIcon className="absolute bottom-[1vh] left-[14vw] z-10" />
            <StarIcon className="absolute bottom-[12vh] left-[23vw] z-10" />
          </>
        )}
        {/* stars on hover - desktop */}
        {hovered && desktop && (
          <>
            <StarIcon className="absolute top-[0vh] left-[6vw] z-10" />
            <StarIcon className="absolute bottom-[4vh] left-[1vw] z-10" />
            <StarIcon className="absolute bottom-[9vh] left-[21vw] z-10" />
            <StarIcon className="absolute bottom-[0vh] left-[14vw] z-10" />
          </>
        )}
      </Link>

      {/* text content */}
      <div
        className="h-full w-full z-10 px-8 mr-4 rounded-3xl flex flex-col justify-center"
        style={{
          backgroundColor: "rgba(252, 251, 247, 0.3)",
        }}
      >
        {/* stars on hover - text */}
        {hovered && (
          <>
            <StarIcon className="absolute top-[19vh] left-[38vw] z-10" />
            {/* <StarIcon className="absolute top-[22vh] left-[27vw] z-10" /> */}
            <StarIcon className="absolute top-[0.33vh] left-[62vw] z-10" />
            <StarIcon className="absolute top-[24.3vh] left-[88.3vw] z-10" />
            
          </>
        )}

        {/* project name */}
        <Link href={`/work/${webpage}`}>
          <h3 className="text-4xl font-medium font-geist-mono">
            {index !== null ? `${String(index + 1).padStart(2, "0")} ` : ""}
            {name}
          </h3>
        </Link>

        {/* duration */}
        <Link href={`/work/${webpage}`}>
        <h4 className="text-lg font-medium font-geist-mono">
          {start === end
            ? `${formatDate(start)} - Hackathon`
            : `${formatDate(start)} - ${formatDate(end)}`}
        </h4>
        </Link>

        {/* overview */}
        <Link href={`/work/${webpage}`}>
        <p className="text-lg font-ibm-plex-sans text-[#261817]">{overview}</p>
        </Link>

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
