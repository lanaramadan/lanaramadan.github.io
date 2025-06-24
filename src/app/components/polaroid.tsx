import Image from "next/image";

type PolaroidProps = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  rotation?: string;
};

export default function Polaroid({
  src,
  alt,
  caption,
  width = 200,
  height = 200,
  rotation = "-10",
}: PolaroidProps) {
  return (
    <div
      className="
        bg-[#D0C0BE] 
        p-3 
        pb-4
        w-fit 
        border-2
        border-current
        transform 
        hover:rotate-2
        hover:scale-[1.1]
        -mr-5
      "
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="overflow-hidden border-2 border-current">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <p className="mt-3 text-2xl ">{caption}</p>
    </div>
  );
}
