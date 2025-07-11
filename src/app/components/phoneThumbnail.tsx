"use client"
import { useState } from "react";
import Image from "next/image";

type PhoneThumbnailProps = {
  images: string[];
  width?: number;
  height?: number;
};

export default function PhoneThumbnail({
  images,
  width = 300,
  height = 240,
}: PhoneThumbnailProps) {
  const mobileProjects: (string | null)[] = [...images.slice(0, 3)];
  while (mobileProjects.length < 3) mobileProjects.push(null);

  return (

      <div 
        className="flex justify-between z-10 px-4 gap-2"
        style={{ width: `${width + 104}px` }}
      >
        {mobileProjects.map((img, idx) => {
          const [hasError, setHasError] = useState(false);
          const src = `/project-images/${img}`;
          return (
            <div 
              key={idx}
              className="relative"
              style={{ width: `${width}px`, height: `${height }px` }}
            >
              {/* phone image */}
              <Image 
                src="/project-images/phone.png"
                alt={`Phone ${idx + 1}`}
                fill
                style={{ objectFit: "contain" }}
                priority
                className="z-10"
              />
              {/* project image */}
              {!hasError ? (
                <Image
                  src={src}
                  alt={`Overlay ${idx + 1}`}
                  width={105}
                  height={105}
                  className="absolute top-2 left-2 rounded-lg z-0"
                  priority
                  onError={() => setHasError(true)}
                />
              ) : (
                <div
                  className="absolute top-2 left-2 rounded-lg z-0"
                  style={{
                    width: 105,
                    height: 225,
                    backgroundColor: "currentColor",
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
  );
}
