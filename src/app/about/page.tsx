"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import NavigationBar from "@/app/components/navigation/navigationBar";

import AboutMe from "../components/about-page/aboutMe";
import Skills from "../components/about-page/skills";
import Interests from "../components/about-page/interests";
import Contact from "../components/about-page/contact";

type Tab = "about" | "skills" | "interests" | "contact";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <main className="bg-light h-screen w-full overflow-hidden">
      <NavigationBar sticky={true} />

      <div className="relative">
        <div className={`absolute top-4 z-10`}>
          <button onClick={() => setActiveTab("about")}>
            <AboutMe />
          </button>
        </div>

        <motion.div
          className="absolute z-20"
          animate={{
            top: activeTab === "about" ? "53vh" : "14vh",
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <button onClick={() => setActiveTab("skills")}>
            <Skills />
          </button>
        </motion.div>


        <motion.div
          className="absolute z-30"
          animate={{
            top: activeTab === "interests" || activeTab === "contact"
  ? "28vh"
  : "65vh",
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <button onClick={() => setActiveTab("interests")}>
            <Interests />
          </button>
        </motion.div>


        <motion.div
          className="absolute z-30"
          animate={{
            top: activeTab === "contact" ? "42vh" : "77vh",
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <button onClick={() => setActiveTab("contact")}>
            <Contact />
          </button>
        </motion.div>

      </div>
    </main>
  );
}
