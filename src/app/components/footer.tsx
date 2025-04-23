import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 mb-8 text-center text-[#946968]">
    <p className="font-[family-name:var(--font-geist-mono)] mb-4 text-xl font-medium">Thank you for stopping by :)</p>
    <div className="flex justify-center gap-10 mt-2">
      <a href="www.linkedin.com/in/lanamramadan" aria-label="LinkedIn">
        <Image
          aria-hidden
          src="/linkedin.svg"
          alt="File icon"
          width={50}
          height={50}
        />
      </a>
      <a href="https://github.com/lanaramadan" aria-label="GitHub">
      <Image
          aria-hidden
          src="/github.svg"
          alt="File icon"
          width={50}
          height={50}
        />
      </a>
      <a href="mailto:lanamramadan@gmail.com" aria-label="Email">
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
