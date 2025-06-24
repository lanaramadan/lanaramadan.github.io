import Image from "next/image";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import FeaturedProjects from "./components/featuredProjects"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavigationBar/>

      <main className="flex-grow flex items-center justify-center">  
        <FeaturedProjects />

      </main>

      
      <Footer />
    </div>
  );
}
