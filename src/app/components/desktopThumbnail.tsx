import Image from "next/image";

export default function DesktopThumbnail({ image }: { image: string }) {
  return (
    <div className="flex w-72 justify-between z-10 px-4">
      <div className="relative w-80 h-40">
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
        <Image
          src={`/project-images/${image}`}
          alt="Overlay"
          width={207}
          height={207}
          className="absolute top-1 left-6 rounded-sm z-0"
          priority
        />
      </div>
    </div>
  );
}
