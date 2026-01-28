"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MailIcon from "../icons/mailIcon";
import BehanceIcon from "../icons/behanceIcon";
import ClosedLetter from "../closedLetter";
import OpenLetter from "../openLetter";

type FooterProps = {
  mini?: boolean;
  color?: string;
};

export default function Footer({ mini = false, color = "text-dark" }: FooterProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const [hovered, setHovered] = useState(false);

  if (mini) {
    return (
      <footer className={`bg-background mt-16 text-center ${color}`}>
        <p className={`font-geist-mono mb-4 text-xl font-medium`}>
          Thank you for stopping by :)
        </p>
        <div className="flex justify-center gap-10 mt-2">
          <a
            href="https://www.linkedin.com/in/lanamramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`hover:drop-shadow-[0_0_8px_currentColor]`}
          >
            <LinkedinIcon className="w-[50px] h-[50px]" />
          </a>

          <a
            href="https://www.behance.net/lanamramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className={`hover:drop-shadow-[0_0_8px_currentColor]`}
          >
            <BehanceIcon className="w-[60px] h-[60px]" />
          </a>

          <a
            href="https://github.com/lanaramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`hover:drop-shadow-[0_0_8px_currentColor]`}
          >
            <GithubIcon className="w-[50px] h-[50px]" />
          </a>

          <a
            href="mailto:lanamramadan@gmail.com"
            aria-label="Email"
            className={`hover:drop-shadow-[0_0_8px_currentColor]`}
          >
            <MailIcon className="w-[50px] h-[50px]" />
          </a>
        </div>
      </footer>
    );
  }

  return (
    <div className="sticky top-0 text-dark bg-background overflow-hidden flex flex-col md:flex-row relative w-full h-screen justify-center items-center gap-4 md:gap-28 px-4 md:px-20">
      <div className="flex flex-col gap-8 text-5xl font-new-spirit-condensed">
        <p>
          Let&apos;s keep in{" "}
          <span className="font-imperial-script text-7xl">touch</span>!
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <a
            href="mailto:lanamramadan@gmail.com"
            className="font-ibm-plex-sans text-xl hover:underline hover:drop-shadow-[0_0_8px_currentColor]"
          >
            Email ↗
          </a>
          <a
            href="https://www.linkedin.com/in/lanamramadan/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ibm-plex-sans text-xl hover:underline hover:drop-shadow-[0_0_8px_currentColor]"
          >
            Linkedin ↗
          </a>
        </div>
      </div>

      <div
        className="flex pt-80 group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="drop-shadow-[0_0_32px_rgba(115,132,111,0.55)] transform rotate-[-11deg] group-hover:rotate-[5deg] transition-transform duration-300">
          <ClosedLetter scale={isMobile ? .5 : 1}/>
        </div>

        <div className="-ml-[24em] -mt-[14em] md:-mt-[16em] drop-shadow-[0_0_32px_rgba(115,132,111,0.55)] transform rotate-[11deg] group-hover:rotate-[5deg] transition-transform duration-300">
          <motion.div>
            <OpenLetter hovered={hovered} scale={isMobile ? .5 : 1}/>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
