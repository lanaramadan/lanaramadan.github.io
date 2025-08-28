import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MailIcon from "../icons/mailIcon";
import BehanceIcon from "../icons/behanceIcon";

export default function Footer() {
  return (
    <footer className="mt-16 mb-8 text-center">
      <p className="font-geist-mono mb-4 text-xl font-medium">
        Thank you for stopping by :)
      </p>
      <div className="flex justify-center gap-10 mt-2">
        <a
          href="https://www.linkedin.com/in/lanamramadan"
          target="_blank"
          aria-label="LinkedIn"
          className="hover:drop-shadow-[0_0_8px_currentColor]"
        >
          <LinkedinIcon className="w-[50px] h-[50px]" />
        </a>

        <a
          href="https://www.behance.net/lanamramadan"
          target="_blank"
          aria-label="Behance"
          className="hover:drop-shadow-[0_0_8px_currentColor]"
        >
          <BehanceIcon className="w-[60px] h-[60px]" />
        </a>

        <a
          href="https://github.com/lanaramadan"
          target="_blank"
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
