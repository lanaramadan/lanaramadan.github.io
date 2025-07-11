import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav 
      className="
        w-full 
        flex 
        justify-between 
        items-center
        pt-8
        pb-10
        px-12
      "
    >
      
      <Link
        href="/"
        className="
          hover:drop-shadow-[0_0_8px_currentColor]
          font-medium
          text-2xl
          sm:text-6xl
          font-[family-name:var(--font-new-spirit-condensed)]
        "
      >
        LANA RAMADAN
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
        <Link
          href="/work"
          className="hover:drop-shadow-[0_0_8px_currentColor]"
        >
          work
        </Link>
        {/* <Link
          href="#play"
          className="hover:drop-shadow-[0_0_8px_currentColor]"
        >
          play
        </Link> */}
        <Link
          href="/about"
          className="hover:drop-shadow-[0_0_8px_currentColor]"
        >
          about
        </Link>
        <Link
          href="/contact"
          className="hover:drop-shadow-[0_0_8px_currentColor]"
        >
          contact
        </Link>
      </div>
    </nav>
  );
}
