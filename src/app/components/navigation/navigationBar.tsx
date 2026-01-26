import Link from "next/link";

type NavigationBarProps = {
  background?: boolean;
  color?: string;
};

export default function NavigationBar({
  background = false,
  color = "text-dark",
}: NavigationBarProps) {
  return (
    <nav
      className={`
        fixed
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
        ${background ? "bg-background" : ""}
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
          sm:space-x-20
          sm:text-lg
          font-geist-mono
          ${color}
        `}
      >
        <Link
          href="/"
          className={`hover:drop-shadow-[0_0_8px_currentColor] ${color}`}
        >
          home
        </Link>

        <Link
          href="/#projects"
          className={`hover:drop-shadow-[0_0_8px_currentColor] ${color}`}
        >
          projects
        </Link>

        <Link
          href="/about"
          className={`hover:drop-shadow-[0_0_8px_currentColor] ${color}`}
        >
          about
        </Link>

        <Link
          href="https://drive.google.com/file/d/1FrviveUauMriJOOf9PztUsA7VZyWPQto/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`
          hover:drop-shadow-[0_0_8px_currentColor]
          px-6
          py-1
          rounded-2xl
          ${color === "text-dark" ? "bg-light" : `bg-[${color}]`}
        `}
        >
          resume
        </Link>
      </div>
    </nav>
  );
}
