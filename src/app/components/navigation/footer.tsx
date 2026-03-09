"use client";

import { useState } from "react";

import NewLetter from "../newLetter";

type FooterProps = {
  mini?: boolean;
  background?: string;
  color?: string;
};

export default function Footer({
  mini = false,
  background = "bg-background",
  color = "text-text",
}: FooterProps) {
  if (mini) {
    return (
      <footer className={`${background} pt-12 pb-8 text-center ${color}`}>
        <p className={`font-historia-sky mb-4 text-5xl font-medium`}>
          Thank you for stopping by!
        </p>
        <div className="flex justify-center gap-10 mt-2 font-ibm-plex-sans text-xl">
          <a
            href="mailto:lanamramadan@gmail.com"
            aria-label="Email"
            className={`hover:drop-shadow-[0_0_8px_currentColor]`}
          >
            Email ↗
          </a>

          <a
            href="https://www.linkedin.com/in/lanamramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`hover:drop-shadow-[0_0_8px_currentColor]`}
          >
            Linkedin ↗
          </a>
        </div>
      </footer>
    );
  }

  return (
    <div className="sticky top-0 text-dark bg-background overflow-hidden flex flex-col md:flex-row relative w-full h-screen justify-center items-center gap-4 md:gap-28 px-4 md:px-20">
     <div className="absolute bottom-[-20%]">
      <NewLetter scale={0.9} />
    </div>
      </div>
  )
}
