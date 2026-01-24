import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MailIcon from "../icons/mailIcon";
import BehanceIcon from "../icons/behanceIcon";
import ClosedLetter from "../closedLetter";

export default function Footer() {
  return (
    <div className="sticky top-0 text-dark bg-background overflow-hidden flex relative w-full h-screen justify-center items-center gap-24 px-20">
      <div className="flex flex-col gap-8 text-5xl font-serif">
        <p>Let's keep in <span className="font-imperial-script text-7xl">touch</span>!</p>
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

      <ClosedLetter rotate={-11}/>
    </div>
  );
}
