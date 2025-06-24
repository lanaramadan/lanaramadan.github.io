import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="w-full flex justify-center pt-6 pb-2 text-[14px] sm:text-[16px] font-[family-name:var(--font-geist-mono)] font-medium text-[#946968] tracking-wide space-x-6 sm:space-x-12">
      <Link
        href=""
        className="hover:underline hover:underline-offset-4 transition-all duration-200"
      >
        Laa Ramadan
      </Link>
      <Link
        href="#work"
        className="hover:underline hover:underline-offset-4 transition-all duration-200"
      >
        work
      </Link>
      <Link
        href="#play"
        className="hover:underline hover:underline-offset-4 transition-all duration-200"
      >
        play
      </Link>
      <Link
        href="#about"
        className="hover:underline hover:underline-offset-4 transition-all duration-200"
      >
        about
      </Link>
      <Link
        href="#contact"
        className="hover:underline hover:underline-offset-4 transition-all duration-200"
      >
        contact
      </Link>
    </nav>
  );
}
