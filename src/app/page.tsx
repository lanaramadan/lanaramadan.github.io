import Image from "next/image";
import Positions from "./components/positions";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import MiniProjectCard from "./components/miniProjectCard"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavigationBar/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <NavigationBar/> */}
        {/* <Positions/> */}

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>


      <div className="flex flex-rows sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <MiniProjectCard
          project="Zotgle"
          imageSrc="/zotgle.png"
          link="https://github.com/lanaramadan/zotgle"
          desktop={true}
        />
        <MiniProjectCard
          project="Zotgle"
          imageSrc="/zotgle.png"
          link="https://github.com/lanaramadan/zotgle"
          desktop={true}
        />
        <MiniProjectCard
          project="Zotgle"
          imageSrc="/zotgle.png"
          link="https://github.com/lanaramadan/zotgle"
          desktop={true}
        />
        <MiniProjectCard
          project="Zotgle"
          imageSrc="/zotgle.png"
          link="https://github.com/lanaramadan/zotgle"
          desktop={true}
        />
      </div>

      
      <Footer />


      
    </div>
  );
}
