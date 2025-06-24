import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav 
      className="
        w-full 
        flex 
        justify-between 
        items-center
        pb-2
        text-[#946968]
      "
    >
      
      <Link
        href=""
        className="
          hover:italic
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
          font-[family-name:var(--font-geist-mono)]
        "
      >
        <Link
          href="#work"
          className="hover:italic"
        >
          work
        </Link>
        <Link
          href="#play"
          className="hover:italic"
        >
          play
        </Link>
        <Link
          href="#about"
          className="hover:italic"
        >
          about
        </Link>
        <Link
          href="#contact"
          className="hover:italic"
        >
          contact
        </Link>
      </div>
    </nav>
  );
}
