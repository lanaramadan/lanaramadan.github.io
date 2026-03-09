import Link from "next/link";

import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";

export default function About() {
  return (
    <main>
      <NavigationBar background={true} backgroundColor="bg-light"/>
      <div className="flex flex-col items-center gap-8 bg-light w-full pt-24">
        <div>
          <Link
            href="/resume/Ramadan_Lana_UX_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-text text-background font-ibm-plex-sans text-lg px-10 py-4 rounded-3xl hover:opacity-80 transition-opacity duration-200"
          >
            Download resume
          </Link>
        </div>
        <div className="w-full max-w-3xl mx-auto px-4">
          <iframe
            src="/resume/Ramadan_Lana_UX_Resume.pdf#toolbar=0"
            className="w-full "
            style={{ height: "114.5vh" }}
          />
        </div>
      </div>

      <Footer mini={true} background="bg-light" />
    </main>
  );
}
