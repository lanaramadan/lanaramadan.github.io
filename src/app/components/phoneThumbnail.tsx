"use client";
import { useState } from "react";
import Image from "next/image";

type PhoneThumbnailProps = {
  images: string[];
  count?: number;
  width?: number;
  height?: number;
};

export default function PhoneThumbnail({
  images,
  count = 3,
  width = 80,
  height = 150,
}: PhoneThumbnailProps) {
  const mobileProjects: (string | null)[] = [...images.slice(0, count)];
  while (mobileProjects.length < count) mobileProjects.push(null);

  const [imageErrors, setImageErrors] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  function handleError(index: number) {
    setImageErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  }

  return (
    <div
      className="flex justify-between z-10 width-fit"
      // style={{ width: `${(width * 3)}px` }}
    >
      {mobileProjects.map((img, idx) => {
        const src = `/project-images/${img}`;
        return (
          <div
            key={idx}
            className="relative"
            style={{
              width: `${(width + 20)}px`,
              height: `${(height + 20)}px`,
            }}
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
                width={width}
                height={height}
                className="absolute rounded-sm z-0"
                style={{ top: 4, left: 10.6 }}
                priority
                onError={() => handleError(idx)}
              />
            ) : (
              <div
                className="absolute rounded-xl z-0"
                style={{
                  top: 4,
                  left: 10.6,
                  width: width,
                  height: (height + 15),
                  backgroundColor: "currentColor",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
