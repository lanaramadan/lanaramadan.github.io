"use client"
import { useState } from "react";
import Image from "next/image";

type DesktopThumbnailProps = {
  image: string;
  width?: number;
  height?: number;
};

export default function DesktopThumbnail({
  image,
  width = 300,
  height = 200,
}: DesktopThumbnailProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="flex justify-between z-10 px-4"
      style={{ width: `${width + 104}px` }}
    >
      <div 
        className="relative"
        style={{ width: `${width + 80}px`, height: `${height + 40}px` }}
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
            width={width}
            height={height}
            className="absolute top-3 left-9 rounded-sm z-0"
            priority
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            className="absolute top-3 left-9 rounded-md z-0"
            style={{
              width,
              height,
              backgroundColor: "currentColor",
            }}
          />
        )}
      </div>
    </div>
  );
}
