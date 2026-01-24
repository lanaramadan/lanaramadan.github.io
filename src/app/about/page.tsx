import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";

import AboutTitle from "../components/about-page/aboutTitle";
import AboutMe from "../components/about-page/aboutMe";

export default function About() {
  return (
    <main>
      <NavigationBar/>
      <AboutTitle/>
      <AboutMe/>
      <Footer/>
    </main>

  );
}
