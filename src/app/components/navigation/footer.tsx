"use client";

import FilmStrip from "../filmStrip";

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
    <footer
      className={`sticky 
    top-0
    flex
    flex-col 
    h-screen
    w-full
    px-0
    md:px-48 
    py-10 
    gap-24
    bg-center
    bg-background
    justify-center ${background} pt-12 pb-8 text-center ${color}`}
    >
      <div className="hidden md:block">
        <FilmStrip />
      </div>
      <div className="flex flex-col gap-0">
        <p className={`font-historia-sky mb-4 text-7xl font-medium`}>
          Thank you for stopping by!
        </p>
        <div className="flex justify-center gap-10 mt-2 font-ibm-plex-sans text-2xl">
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
      </div>
    </footer>
  );
}
