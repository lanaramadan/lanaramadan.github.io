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

  const [imageErrors, setImageErrors] = useState<boolean[]>([false, false, false]);

  function handleError(index: number) {
    setImageErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  }

  return (

      <div 
        className="flex justify-between z-10 px-4 gap-2"
        style={{ width: `${width + 104}px` }}
      >
        {mobileProjects.map((img, idx) => {
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
              {!imageErrors[idx] && src ? (
                <Image
                  src={src}
                  alt={`Overlay ${idx + 1}`}
                  width={105}
                  height={105}
                  className="absolute top-2 left-2 rounded-lg z-0"
                  priority
                  onError={() => handleError(idx)}
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
