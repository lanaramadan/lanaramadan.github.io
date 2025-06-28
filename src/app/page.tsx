import NavigationBar from "./components/navigation/navigationBar";
import Footer from "./components/navigation/footer";
import FeaturedProjects from "./components/home-page/featuredProjects"
import HomeTitle from "./components/home-page/homeTitle";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen py-8 px-12 gap-16 font-[family-name:var(--font-geist-sans)]">
//       <NavigationBar/>

//       <main className="flex-grow flex flex-col items-center justify-center">  
//         <HomeBanner />
//         <FeaturedProjects />
//       </main>

//       <Footer />
//     </div>
//   );
// }

export default function Home() {
  return (
    <main>
      {/* top banner */}
      <section className="sticky top-0 h-screen section-bg  flex flex-col">
        <div className="z-10"><HomeTitle/></div>
        
      </section>

      {/* content */}
      <section className="relative h-screen z-10 section-bg border-t-4 border-current outline-offset-5">
        <NavigationBar/>
        <FeaturedProjects />
        <Footer />

    
      </section>
    </main>
  );
}