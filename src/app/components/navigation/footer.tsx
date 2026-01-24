import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MailIcon from "../icons/mailIcon";
import BehanceIcon from "../icons/behanceIcon";

export default function Footer() {
  return (
    <div className="sticky top-0 text-dark bg-background overflow-hidden flex flex-col relative w-full h-screen justify-center px-20">
      <div className="flex flex-col gap-8 text-5xl font-serif">
        <p>Let's keep in <span className="font-imperial-script text-7xl">touch</span>!</p>
        <div className="flex gap-12">
          <p className="font-ibm-plex-sans text-xl hover:underline hover:drop-shadow-[0_0_8px_currentColor]">Email ↗</p>
          <p className="font-ibm-plex-sans text-xl hover:underline hover:drop-shadow-[0_0_8px_currentColor]">Linkedin ↗</p>
        </div>

      </div>
    </div>
  );
}
