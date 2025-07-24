"use client";
import React, { useState } from "react";

import Image from "next/image";

type PolaroidProps = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  rotation?: string;
  className?: string;
};

export default function Polaroid({
  src,
  alt,
  caption,
  width = 200,
  height = 200,
  rotation = "-10",
  className = "",
}: PolaroidProps) {
  const [hovered, setHovered] = useState(false);

  const numericRotation = parseInt(rotation);
  const hoverRotation = (-1 * numericRotation).toString();

  return (
    <div
      className={`
        bg-current
        p-3 
        pb-4
        w-fit 
        border-2
        border-current
        transition-transform duration-500 ease-in-out
        hover:scale-[1.05]
        ${className}
      `}
      style={{
        backgroundColor: "#FCFBF7",
        transform: `rotate(${hovered ? hoverRotation : rotation}deg)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* translucent overlay using currentColor */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "currentColor",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10">
        <div className="overflow-hidden border-2 border-current">
          <Image src={src} alt={alt} width={width} height={height} className="block" />
        </div> 
        {caption.length > 2 ? 
          // text
          <p className="mt-3 ml-3 text-xl text-[#261817] font-geist-mono">{caption}</p> : 
          // emojis
          <p className="mt-3 ml-3 text-2xl text-[#261817] font-geist-mono">{caption}</p>
        }
      </div>
    </div>
  );
}
