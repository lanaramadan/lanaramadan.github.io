import Image from "next/image";

export default function ProjectThumbnail({
  desktop,
  images,
}: {
  desktop: boolean;
  images: string[];
}) {
  images = ["zotgle.png", "gem-1.png"]
  return (
    <>
      {desktop ? (
        <div className="relative w-fit h-40 flex pt-6">
          {/* bg */}
          <div 
            className="absolute bottom-4 w-72 h-36  rounded-2xl z-0"  
            style={{
              backgroundColor: "currentColor",
              opacity: 0.4,
            }}
          />
          
          {/* desktop thumbnail */}
          <div className="flex w-72 justify-between z-10 px-4">
            <div className="relative w-80 h-40">
              <Image
                src="/project-images/laptop.png"
                alt="Laptop"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="z-10"
              />
              <Image
                src={`/project-images/${images[0]}`}
                alt="Overlay"
                width={207}
                height={207}
                className="absolute top-1 left-6 rounded-sm z-0"
                priority
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-fit h-40 flex pt-6">
          {/* bg */}
          <div className="absolute bottom-4 w-72 h-36 bg-[#CBD1C4] rounded-2xl z-0" />

          {/* phone thumbnail */}
          <div className="flex w-72 justify-between z-10 px-4">
            {/* Phone 1 */}
            <div className="relative w-20 h-40">
              <Image
                src="/project-images/phone.png"
                alt="Phone 1"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="z-10"
              />
              <Image
                src={`/project-images/${images[1]}`}
                alt="Overlay 1"
                width={70}
                height={70}
                className="absolute top-1 left-1 rounded-sm z-0"
                priority
              />
            </div>

            {/* Phone 2 */}
            <div className="relative w-20 h-40">
              <Image
                src="/project-images/phone.png"
                alt="Phone 2"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="z-10"
              />
              <Image
                src={`/project-images/${images[1]}`}
                alt="Overlay 2"
                width={70}
                height={70}
                className="absolute top-1 left-1 rounded-sm z-0"
                priority
              />
            </div>

            {/* Phone 3 */}
            <div className="relative w-20 h-40">
              <Image
                src="/project-images/phone.png"
                alt="Phone 2"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="z-10"
              />
              <Image
                src={`/project-images/${images[1]}`}
                alt="Overlay 2"
                width={70}
                height={70}
                className="absolute top-1 left-1 rounded-sm z-0"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}