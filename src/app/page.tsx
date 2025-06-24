import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import FeaturedProjects from "./components/featuredProjects"
import HomeBanner from "./components/homeBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-8 px-12 gap-16 font-[family-name:var(--font-geist-sans)]">
      <NavigationBar/>

      <main className="flex-grow flex flex-col items-center justify-center">  
        <HomeBanner />
        <FeaturedProjects />
      </main>

      <Footer />
    </div>
  );
}
