import Link from "next/link";

type NavigationBarProps = {
  background?: boolean;
  backgroundColor?: string;
  color?: string;
  sticky?: boolean;
};

export default function NavigationBar({
  background = false,
  backgroundColor = "bg-background",
  color = "text-dark",
  sticky = false,
}: NavigationBarProps) {
  return (
    <nav
      className={`
      ${sticky ? "sticky" : "fixed"}
        top-0
        left-0
        z-50
        w-full
        flex
        justify-center
        items-center
        pt-8
        pb-4
        px-12
        ${color}
        ${background ? backgroundColor : ""}
      `}
    >
      {/* <Link
        href="/"
        className={`
          relative
          h-16
          w-20
          font-new-spirit-condensed
          text-5xl
          hover:drop-shadow-[0_0_8px_currentColor]
          ${color}
        `}
      >
        <span className="absolute left-0 top-0">L</span>
        <span className="absolute left-2 top-5 text-medium">R</span>
      </Link> */}

      <div
        className={`
          tracking-wide 
          font-medium 
          space-x-10
          text-sm
          md:space-x-20
          md:text-lg
          font-ibm-plex-sans
          ${color}
        `}
      >
        <Link href="/" className={`relative group ${color}`}>
          <span className="relative z-10">home</span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[120%] rounded-[50%] border border-current scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
        </Link>

        <Link href="/#projects" className={`relative group ${color}`}>
          <span className="relative z-10">projects</span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[120%] rounded-[50%] border border-current scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
        </Link>

        <Link href="/about" className={`relative group ${color}`}>
          <span className="relative z-10">about</span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[120%] rounded-[50%] border border-current scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
        </Link>

        <Link
          href="/resume"
          className={`relative group ${color}`}
        >
          <span className="relative z-10">resume</span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[120%] rounded-[50%] border border-current scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
        </Link>
      </div>
    </nav>
  );
}
