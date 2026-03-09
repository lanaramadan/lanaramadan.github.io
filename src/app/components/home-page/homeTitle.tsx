"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import HoverScaleText from "./hoverScaleText";

interface FloatingItem {
  src: string;
  alt: string;
  rotation: number;
  style: React.CSSProperties;
  width: number;
}

const ITEMS: FloatingItem[] = [
  {
    src: "/newspaper-clipping.png",
    alt: "Creativity newspaper clipping",
    rotation: -8,
    width: 180,
    style: { top: "13%", left: "14%" },
  },
  {
    src: "/notebook.png",
    alt: "Grid notebook",
    rotation: -13,
    width: 696,
    style: { top: "32%", left: "-20%" },
  },
  {
    src: "/coffee-cup.png",
    alt: "Latte art coffee cup",
    rotation: -26,
    width: 240,
    style: { top: "16%", left: "-4%" },
  },
  {
    src: "/pen.png",
    alt: "Blue pen",
    rotation: 12,
    width: 24,
    style: { top: "24%", left: "22%" },
  },
  {
    src: "/glasses.png",
    alt: "Brown glasses",
    rotation: -31,
    width: 260,
    style: { bottom: "22%", left: ".5%" },
  },
  {
    src: "/kodak-film.png",
    alt: "Kodak film roll",
    rotation: 15,
    width: 130,
    style: { bottom: "10%", left: "18%" },
  },
  {
    src: "/doily.png",
    alt: "White lace doily",
    rotation: 0,
    width: 600,
    style: { top: "20%", right: "-16%" },
  },
  {
    src: "/tulips.png",
    alt: "Pink tulips",
    rotation: -46,
    width: 240,
    style: { top: "2%", right: "-1%" },
  },
  {
    src: "/locket.png",
    alt: "Gold heart locket",
    rotation: -35,
    width: 160,
    style: { top: "34%", right: "8%" },
  },
  {
    src: "/matcha-cup.png",
    alt: "Iced matcha latte",
    rotation: 0,
    width: 220,
    style: { bottom: "23%", right: "-6%" },
  },
  {
    src: "/fuji-camera.png",
    alt: "Fujifilm camera",
    rotation: -13,
    width: 260,
    style: { bottom: "16%", right: "9%" },
  },
];

function FloatingAsset({ item }: { item: FloatingItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute hidden sm:block select-none"
      style={{
        ...item.style,
        width: item.width,
        transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered
          ? `rotate(${item.rotation + 10}deg) scale(1.05)`
          : `rotate(${item.rotation}deg) scale(1)`,
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.src}
        alt={item.alt}
        draggable={false}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

export default function HomeTitle() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="sticky top-0 bg-background text-dark overflow-hidden flex flex-col relative w-full h-screen justify-between items-center cursor-none">
      {/* Gradient cursor */}
      <div
        className="pointer-events-none fixed w-16 h-16 rounded-full bg-gradient-to-r from-text via-text to-medium opacity-90 blur-xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
        style={{ left: mousePos.x, top: mousePos.y, zIndex: 50 }}
      />

      {/* Floating flat-lay items */}
      {ITEMS.map((item) => (
        <FloatingAsset key={item.alt} item={item} />
      ))}

      {/* Center text block */}
      <div className="flex flex-col items-center justify-center text-center z-10 flex-1 gap-4">
        {/* Line 1: Name */}
        <HoverScaleText>
          <h1 className="font-historia-sky text-text leading-none text-9xl">
            Lana Ramadan
          </h1>
        </HoverScaleText>

        {/* Line 2: Title */}
        <div className="flex flex-col gap-0">
          <HoverScaleText>
            <p className="font-ibm-plex-sans text-dark tracking-widest uppercase text-2xl">
              Product Designer
            </p>
          </HoverScaleText>

          {/* Line 3: Tagline */}
          <HoverScaleText>
            <p className="font-ibm-plex-sans text-dark/70 tracking-wide text-xl">
              bridging the gap between design &amp; development
            </p>
          </HoverScaleText>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [2, -8, 2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href="/#projects"
          className="pb-4 font-historia-sky text-4xl text-dark z-10 cursor-none hover:opacity-60 transition-opacity duration-200"
        >
          ↓ scroll down ↓
        </Link>
      </motion.div>

      <div className="fixed bottom-4 right-4 z-40 font-ibm-plex-sans text-sm text-dark/50 text-right leading-relaxed">
        ⚠️ Site under construction,
        <br />
        apologies for any errors!
      </div>
    </div>
  );
}
