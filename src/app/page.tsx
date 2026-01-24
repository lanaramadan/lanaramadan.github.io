"use client";
import emailjs from "emailjs-com";

import { useEffect } from "react";

import NavigationBar from "./components/navigation/navigationBar";
import Footer from "./components/navigation/footer";
import FeaturedProjects from "./components/home-page/featuredProjects";
import HomeTitle from "./components/home-page/homeTitle";

export default function Home() {
  useEffect(() => {
    // send email if not already sent this session
    if (!sessionStorage.getItem("visitEmailSent")) {
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => {
          emailjs
            .send(
              "service_2k3k1zd",
              "template_3zr0nvl",
              { ip: data.ip,
                referrer: document.referrer || "direct",
                time: new Date().toISOString()
               },
              "M53J8EdHSK4oDYC3I"
            )
            .then(
              () => {
                console.log("Email sent");
                sessionStorage.setItem("visitEmailSent", "true");
              },
              (error) => {
                console.error("Email failed", error.text);
              }
            );
        });
    }
  }, []);

  return (
    <NavigationBar />
    // <main className="">
    //   {/* top banner */}
    //   <section className="sticky top-0 h-screen section-bg flex flex-col">
    //     {/* <NavigationBar name={false}/> */}
    //     <div className="z-10">
    //       <HomeTitle />
    //     </div>
    //   </section>

    //   {/* content */}
    //   <section className="sticky z-10 h-[155vh] section-bg border-t-4 border-current px-4">
    //     <NavigationBar />
    //     <FeaturedProjects />
    //     <Footer />
    //   </section>
    // </main>
  );
}
