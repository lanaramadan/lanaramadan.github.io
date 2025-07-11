"use client"
import { useState } from "react";
import Image from "next/image";

type PhoneThumbnailProps = {
  images: string[];
  scale?: number;
};

export default function PhoneThumbnail({
  images,
  scale = 1
}: PhoneThumbnailProps) {
  const width = 100;
  const height = 200;

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
        className="flex justify-between z-10 px-4 gap-1 width-fit"
        // style={{ width: `${(width * 3)}px` }}
      >
        {mobileProjects.map((img, idx) => {
          const src = `/project-images/${img}`;
          return (
            <div 
              key={idx}
              className="relative"
              style={{ width: `${(width + 20) * scale}px`, height: `${(height + 20) * scale}px` }}
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
                  width={(width * scale)}
                  height={(height * scale)}
                  className="absolute rounded-3xl z-0"
                  style={{ top: 3 * scale, left: 10 * scale }}
                  priority
                  onError={() => handleError(idx)}
                />
              ) : (
                <div
                  className="absolute rounded-2xl z-0"
                  style={{
                    top: 3 * scale,
                    left: 10 * scale,
                    width: (width) * scale,
                    height: (height + 15) * scale,
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
