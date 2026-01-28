"use client"

import { useEffect, useState } from "react";

import Polaroid from "../polaroid";

export default function AboutTitle() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block sticky bg-background top-0 text-dark overflow-hidden flex flex-col relative w-full h-screen justify-between align-center items-center cursor-none">
      {/* gradient cursor */}
      <div
        className="pointer-events-none fixed w-16 h-16 rounded-full bg-gradient-to-r from-dark via-dark to-medium opacity-90 blur-xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      <div className="flex flex-col w-full h-screen justify-center align-center items-center leading-[1] text-[15vw] font-medium font-new-spirit-condensed">
        <h1>Designer</h1>
        <h1>Creative Coder</h1>
        <h1>UX Engineer</h1>
      </div>

      {/* polaroids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center group">
        <div className="z-20 translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-out">
          <Polaroid
            src="/beach.jpg"
            alt="Beach"
            caption="@ the beach"
            rotation="-12"
            width={140}
            rotate={false}
          />
        </div>
        <div className="z-10">
          <Polaroid
            src="/matcha.png"
            alt="Coffee & matcha"
            caption="design fuel"
            rotation="5"
            width={200}
            rotate={false}
          />
        </div>
        <div className="z-0 -translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-out">
          <Polaroid
            src="/city.jpg"
            alt="Coffee"
            caption="in the city"
            rotation="17"
            width={150}
            rotate={false}
          />
        </div>
      </div>
    </div>
  );
}