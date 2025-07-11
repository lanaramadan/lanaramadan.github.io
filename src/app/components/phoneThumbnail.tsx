"use client"
import { useState } from "react";
import Image from "next/image";

export default function PhoneThumbnail({ images }: { images: string[] }) {
  const mobileProjects: (string | null)[] = [...images.slice(0, 3)];
  while (mobileProjects.length < 3) mobileProjects.push(null);

  return (

      <div className="flex w-72 justify-between z-10 px-4">
        {mobileProjects.map((img, idx) => {
          const [hasError, setHasError] = useState(false);
          const src = `/project-images/${img}`;
          return (
          <div key={idx} className="relative w-20 h-40">
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
                width={70}
                height={70}
                className="absolute top-1 left-1 rounded-sm z-0"
                priority
                onError={() => setHasError(true)}
              />
            ) : (
              <div
                className="absolute top-1 left-1 w-[74px] h-[151px] rounded-md z-0"
                style={{ backgroundColor: "currentColor" }}
              />
            )}
          </div>
        )})}
      </div>
  );
}
