import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

import { useRef } from "react";

import projectData from "@/data/projects.json";
import CurvedLine from "../curvedLine";
import ProjectCard from "./projectCard";

export default function Projects() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const containerRef = useRef(null);

  const initialRotations = [3, -3, 6, -6, -9, 9];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // get the each card's final position in the grid
  const getCardPosition = (index: number) => {
    const cols = 3;
    const row = Math.floor(index / cols);
    const col = index % cols;

    const cardWidth = 340;
    const gap = 64;

    const totalWidth = cols * cardWidth + (cols - 1) * gap;

    const startX = -totalWidth / 2 + cardWidth / 2;

    const x = startX + col * (cardWidth + gap);
    const y = row * 350 - 170;

    return { x, y };
  };

  // Precompute motion values
  const cardMotionValues: {
    x: MotionValue<number> | number;
    y: MotionValue<number> | number;
    rotate: MotionValue<number> | number;
  }[] = projectData.designProjects.map((_, index) => {
    if (isMobile) {
      // mobile: no animation
      return { x: 0, y: 0, rotate: 0 };
    }

    const { x: finalX, y: finalY } = getCardPosition(index);

    /* eslint-disable react-hooks/rules-of-hooks */
    const x = useTransform(scrollYProgress, [0, 0.4], [0, finalX]);
    const y = useTransform(scrollYProgress, [0, 0.4], [0, finalY]);
    const rotate = useTransform(scrollYProgress, [0, 0.4], [initialRotations[index], 0]);
    /* eslint-enable react-hooks/rules-of-hooks */

    return { x, y, rotate };
  });

  return (
    <div className="sticky top-0  md:h-[400vh] w-full">
      <section ref={containerRef} className="relative md:h-[400vh] ">
        <div id="projects" className="absolute top-[250vh]" />

        <div
          className="
          sticky 
          top-0
          flex
          flex-col 
          bg-light 
          h-screen
          w-full
          px-0
          md:px-48 
          py-10 
          gap-6 
          bg-[url('/green-bg.png')] 
          bg-cover 
          bg-center
          justify-center"
        >
          {/* subheader */}
          <div className="flex flex-col items-center text-dark">
            <h2
              className="
              font-medium
              text-7xl
              font-imperial-script
              pt-6
            "
            >
              projects
            </h2>
            <CurvedLine width="180" stroke="6" className="-mt-4" />
          </div>

          {/* projects */}
          {isMobile ? (
            <div className="flex gap-6 overflow-x-scroll py-8 px-8 snap-x">
              {projectData.designProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            <div className="relative w-full flex-1 flex items-center justify-center">
              {projectData.designProjects.map((project, index) => {
                const { x, y, rotate } = cardMotionValues[index];

                return (
                  <motion.div
                    key={index}
                    className="absolute w-[30%]"
                    style={{
                      x,
                      y,
                      rotate,
                      zIndex: 10 - index,
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
