import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav
      className="
	  	fixed
		top-0
		left-0
		z-50
        w-full 
        flex 
        justify-between 
        items-center
        pt-4
        pb-10
        px-12
		text-dark
      "
    >
      <Link
        href="/"
        className="
			relative
			h-16
			w-20
			font-new-spirit-condensed
			text-5xl 
			hover:drop-shadow-[0_0_8px_currentColor]"
      >
        <span className="absolute left-0 top-0 font-serif">L</span>

        <span className="absolute left-3 top-5 font-serif text-medium">R</span>
      </Link>

      <div
        className="
			tracking-wide 
			font-medium 
			space-x-10
			text-sm
			sm:space-x-20
			sm:text-xl
			font-geist-mono
        "
      >
        <Link href="#work" className="hover:drop-shadow-[0_0_8px_currentColor]">
          work
        </Link>

        <Link
          href="/about"
          className="hover:drop-shadow-[0_0_8px_currentColor]"
        >
          about
        </Link>

        <Link
          href="https://drive.google.com/file/d/122jeEE-qKwpD2LD3fz3cC03HE7Sj5gPu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="
		  	hover:drop-shadow-[0_0_8px_currentColor]
			bg-light
			px-6
			py-1
			rounded-2xl
			"
        >
          resume
        </Link>
      </div>
    </nav>
  );
}
