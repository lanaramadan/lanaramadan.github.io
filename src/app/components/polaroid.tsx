"use client";
import React, { useState } from "react";
import Image from "next/image";

type PolaroidProps = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  rotation?: string;
  className?: string;
  rotate?: boolean
};

export default function Polaroid({
  src,
  alt,
  caption,
  width = 200,
  rotation = "-10",
  className = "",
  rotate = true
}: PolaroidProps) {
  const [hovered, setHovered] = useState(false);

  const numericRotation = parseInt(rotation);
  const hoverRotation = rotate ? (-1 * numericRotation).toString() : numericRotation.toString();

  return (
    <div
      className={`
        p-3 
        bg-background
        drop-shadow-[0_0_16px_rgba(115,132,111,0.75)] 
        transition-all duration-500 ease-in-out
        ${className}
      `}
      style={{
        transform: `rotate(${hovered ? hoverRotation : rotation}deg)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {/* image */}
        <div className="relative" style={{ width: `${width}px`, height: `${width * 1.2}px` }}>
          <Image
            src={src}
            alt={alt}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* caption */}
        {caption.length > 2 ? (
          // text
          <p className="text-center mt-3 text-2xl text-dark font-eternate">
            {caption}
          </p>
        ) : (
          // emojis
          <p className="mt-3 ml-3 text-2xl font-geist-mono">
            {caption}
          </p>
        )}
      </div>    
    </div>
  );
}