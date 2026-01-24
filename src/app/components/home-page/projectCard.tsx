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
  const [hovered, setHovered] = useState(false);

  return (
    // TODO add drop shadow on hover
    <Link href={`/work/${webpage}`}>
      <div
        className="flex flex-col items-left bg-medium rounded-3xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
