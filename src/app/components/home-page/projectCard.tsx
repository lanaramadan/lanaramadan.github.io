"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, webpage, overview, description, images, desktop, nda } =
    project;
  const [rotate, setRotate] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleMouseEnter = () => {
    if (revealed) return;

    // random rotation between -10 and 10 degrees
    const randomRotation = Math.floor(Math.random() * 21) - 10;
    setRotate(webpage ? randomRotation : 0);
  };

  const handleMouseLeave = () => {
    setRotate(0);
  };

  const handleClick = () => {
    if (nda) {
      setRevealed((prev) => !prev);
    }
  };

  // card content itself

  const CardContent = (
    <div
      className={`
      flex flex-col items-left bg-medium rounded-3xl
      drop-shadow-[0_0_16px_rgba(115,132,111,0.75)]
      transition-transform duration-300 ease-out w-auto cursor-pointer
      ${
        webpage
          ? "hover:shadow-[inset_0_0_16px_rgba(115,132,111,0.5),0_0_16px_rgba(115,132,111,0.75)]"
          : ""
      }
    `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ transform: `rotate(${!revealed ? rotate : 0}deg)` }}
    >
      <h3 className="font-new-spirit-condensed m-3 text-4xl text-text">
        {name}
      </h3>

      <div className="relative overflow-hidden p-3 bg-background rounded-3xl h-[18rem] md:h-[14rem]">
        <motion.div
          animate={{ opacity: revealed ? 0.3 : 1 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-2 h-full"
        >
          <p className="h-20 md:h-12">{overview}</p>

          <div className="flex justify-center items-center flex-1">
            {desktop ? (
              <DesktopThumbnail image={images[0]} scale={0.65} />
            ) : (
              <PhoneThumbnail images={images} width={60} height={120} />
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {nda && revealed && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 bg-background rounded-3xl p-4 flex flex-col justify-between"
            >
              <p className="text-sm leading-relaxed text-text text-ibm-plex-sans">
                {description}
              </p>

              <span className="italic text-xs opacity-70 text-ibm-plex-sans text-text">
                Details protected under NDA.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return webpage && !nda ? (
    <Link href={`/${webpage}`}>{CardContent}</Link>
  ) : (
    CardContent
  );
}
