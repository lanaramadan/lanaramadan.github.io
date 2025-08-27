import NavigationBar from "./components/navigation/navigationBar";
import Footer from "./components/navigation/footer";
import FeaturedProjects from "./components/home-page/featuredProjects";
import HomeTitle from "./components/home-page/homeTitle";

export default function Home() {
  return (
    <main>
      {/* top banner */}
      <section className="sticky top-0 h-screen section-bg flex flex-col">
        {/* <NavigationBar name={false}/> */}
        <div className="z-10">
          <HomeTitle />
        </div>
      </section>

      {/* content */}
      <section className="sticky z-10 h-[150vh] section-bg border-t-4 border-current">
        <NavigationBar />
        <FeaturedProjects />
        <Footer />
      </section>
    </main>
  );
}
