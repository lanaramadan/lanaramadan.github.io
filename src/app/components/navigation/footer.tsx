import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MailIcon from "../icons/mailIcon";
import BehanceIcon from "../icons/behanceIcon";
import ClosedLetter from "../closedLetter";

type FooterProps = {
  mini?: boolean;
};

export default function Footer({ mini = false }: FooterProps) {
  if (mini) {
    return (
      <footer className="mt-16 mb-8 text-center">
        <p className="font-geist-mono mb-4 text-xl font-medium">
          Thank you for stopping by :)
        </p>
        <div className="flex justify-center gap-10 mt-2">
          <a
            href="https://www.linkedin.com/in/lanamramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <LinkedinIcon className="w-[50px] h-[50px]" />
          </a>

          <a
            href="https://www.behance.net/lanamramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <BehanceIcon className="w-[60px] h-[60px]" />
          </a>

          <a
            href="https://github.com/lanaramadan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <GithubIcon className="w-[50px] h-[50px]" />
          </a>

          <a
            href="mailto:lanamramadan@gmail.com"
            aria-label="Email"
            className="hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <MailIcon className="w-[50px] h-[50px]" />
          </a>
        </div>
      </footer>
    );
  }

  return (
    <div className="sticky top-0 text-dark bg-background overflow-hidden flex relative w-full h-screen justify-center items-center gap-24 px-20">
      <div className="flex flex-col gap-8 text-5xl font-serif">
        <p>
          Let&apos;s keep in{" "}
          <span className="font-imperial-script text-7xl">touch</span>!
        </p>
        <div className="flex gap-12">
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

      <ClosedLetter rotate={-11} />
    </div>
  );
}
