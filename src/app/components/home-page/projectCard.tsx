"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, webpage, overview, images, desktop } = project;
  const [rotate, setRotate] = useState(0);

  const handleMouseEnter = () => {
    // random rotation between -10 and 10 degrees
    const randomRotation = Math.floor(Math.random() * 21) - 10;
    setRotate(randomRotation);
  };

  const handleMouseLeave = () => {
    setRotate(0);
  };

  return (
    <Link href={`/work/${webpage}`}>
      <div
        className="
          flex
          flex-col 
          items-left 
          bg-medium 
          rounded-3xl 
          drop-shadow-[0_0_16px_rgba(115,132,111,0.75)] 
          hover:shadow-[inset_0_0_16px_rgba(115,132,111,0.5), 0_0_16px_rgba(115,132,111,0.75)]
          transition-transform 
          duration-300 
          ease-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <h3 className="font-new-spirit-condensed m-3 text-4xl text-text">
          {name}
        </h3>

        <div className="flex flex-col items-left p-3 bg-background rounded-3xl gap-2">
          <p className="h-12">{overview}</p>

          <div className="flex justify-center items-center h-36">
            {desktop ? (
              <DesktopThumbnail image={images[0]} scale={0.65} />
            ) : (
              <PhoneThumbnail images={images} width={60} height={120} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
