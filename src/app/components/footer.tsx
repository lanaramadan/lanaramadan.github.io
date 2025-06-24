import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 mb-8 text-center text-[#946968]">
    <p className="font-[family-name:var(--font-geist-mono)] mb-4 text-xl font-medium">Thank you for stopping by :)</p>
    <div className="flex justify-center gap-10 mt-2">
      <a 
        href="https://www.linkedin.com/in/lanamramadan" 
        target="_blank"
        aria-label="LinkedIn"
        className="hover:drop-shadow-[0_0_8px_#946968]"
      >
        <Image
          aria-hidden
          src="/linkedin.svg"
          alt="File icon"
          width={50}
          height={50}
        />
      </a>
      <a 
        href="https://github.com/lanaramadan" 
        target="_blank"
        aria-label="GitHub"
        className="hover:drop-shadow-[0_0_8px_#946968]"
      >
      <Image
          aria-hidden
          src="/github.svg"
          alt="File icon"
          width={50}
          height={50}
        />
      </a>
      <a 
        href="mailto:lanamramadan@gmail.com"
        aria-label="Email"
        className="hover:drop-shadow-[0_0_8px_#946968]"
      >
        <Image
          aria-hidden
          src="/mail.svg"
          alt="File icon"
          width={50}
          height={50}
        />
      </a>
    </div>
  </footer>
  );
}
