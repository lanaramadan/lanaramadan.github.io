"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import Postcard from "./postcard";
import Polaroid from "../polaroid";

export default function AboutMe() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const [flip, setFlip] = useState(true);

  return (
    <div
      className="
      sticky 
      top-0 
      text-dark 
      overflow-hidden 
      flex 
      flex-col 
      relative 
      w-full 
      h-screen 
      justify-between 
      items-center 
      px-4
      sm:px-48 
      py-24
      bg-[url('/green-bg.png')] 
      bg-cover 
      bg-center"
    >
      {/* Polaroid stacked on bottom-right */}
      <Polaroid
        src="/me.jpeg"
        alt="A picture of me!"
        caption="that's me!"
        rotation={`${flip ? "7" : "15"}`}
        width={250}
        scale={isMobile ? 0.6 : 1}
        className={`
          absolute z-10
          top-[44em] right-[0em]
          ${
            flip
              ? "md:top-[20em] md:right-[-2em]"
              : "md:top-[24em] md:right-[6em]"
          }
        `}
      />

      <motion.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className={`
            bg-[rgba(181,188,176,0.25)]
            w-full h-full p-8 border-4 border-dark
            ${flip ? "drop-shadow-[0_0_16px_rgba(115,132,111,0.75)]" : ""}
          `}
        >
          {/* details side */}
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            style={{
              backfaceVisibility: "hidden",
              display: flip ? "block" : "none",
            }}
            className="h-full"
          >
            <button
              onClick={() => {
                if (window.innerWidth >= 768) {
                  setFlip((prev) => !prev);
                }
              }}
              className="h-full"
            >
              <Postcard side="front" />
            </button>
          </motion.div>

          {/* image side (desktop only) */}
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: flip ? 180 : 0 }}
            transition={{ duration: 0.7 }}
            style={{
              backfaceVisibility: "hidden",
              display: flip ? "none" : "block",
            }}
            className="hidden sm:block"
          >
            <button onClick={() => setFlip((prevState) => !prevState)}>
              <Postcard side="back" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
