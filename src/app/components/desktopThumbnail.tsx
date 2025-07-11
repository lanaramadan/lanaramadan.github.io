"use client"
import { useState } from "react";
import Image from "next/image";

type DesktopThumbnailProps = {
  image: string;
  scale?: number;
};

export default function DesktopThumbnail({
  image,
  scale = 1
}: DesktopThumbnailProps) {
  const [hasError, setHasError] = useState(false);
  const width = 300;
  const height = 200

  return (
    <div 
      className="flex justify-between z-10 px-4 width-fit"
      // style={{ width: `${(width + 104) * scale}px` }}
    >
      <div 
        className="relative"
        style={{ width: `${(width + 70) * scale}px`, height: `${(height + 40) * scale}px` }}
      >
        {/* laptop image */}
        <Image
          src="/project-images/laptop.png"
          alt="Laptop"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="z-10"
        />
        {/* project image */}
        {!hasError ? (
          <Image
            src={`/project-images/${image}`}
            alt="Overlay"
            width={width * scale}
            height={height * scale}
            className="absolute rounded-sm z-0"
            style={{ top: 12 * scale, left: 36 * scale }}
            priority
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            className="absolute rounded-md z-0"
            style={{
              top: 12 * scale,
              left: 36 * scale,
              width: width * scale,
              height: height * scale,
              backgroundColor: "currentColor",
            }}            
          />
        )}
      </div>
    </div>
  );
}
